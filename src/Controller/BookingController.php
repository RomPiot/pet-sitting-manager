<?php

namespace App\Controller;

use App\Entity\Booking;
use App\Form\BookingType;
use App\Repository\BookingRepository;
use DateTime;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/booking')]
class BookingController extends AbstractController
{
    private RequestStack $requestStack;
    private EntityManagerInterface $entityManager;

    public function __construct(RequestStack $requestStack, EntityManagerInterface $entityManager)
    {
        $this->requestStack = $requestStack;
        $this->entityManager = $entityManager;
    }

    #[Route('/', name: 'bookings')]
    public function index(BookingRepository $bookingRepository): Response
    {
        $bookings = $bookingRepository->findAll();
        $bookingsSerialized = $this->getBookingsSerialized($bookingRepository);

        return $this->render('booking/index.html.twig', [
            'bookings' => $bookings,
            'bookingsSerialized' => $bookingsSerialized,
        ]);
    }

    #[Route('/new', name: 'booking_new', methods: ['GET', 'POST'])]
    public function new(Request $request, BookingRepository $bookingRepository): Response
    {
        $booking = new Booking();

        $form = $this->createForm(BookingType::class, $booking);
        $form->handleRequest($request);

        $bookingSerialized = $this->getBookingSerialized($booking, $bookingRepository);

        if ($form->isSubmitted() && $form->isValid()) {
            if ($booking->getDogs()->count() === 0) {
                $this->addFlash('danger', 'Vous devez selectionner au moins un chien');
                return $this->redirectToRoute('booking_new');
            }

            $this->addFlash('success', 'Réservation créée avec succès');
            $bookingRepository->save($booking, true);

            return $this->redirectToRoute('bookings', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('booking/new.html.twig', [
            'booking' => $booking,
            'bookingSerialized' => $bookingSerialized,
            'form' => $form,
        ]);
    }

    #[Route('/new/{date_start}/{date_end}', name: 'booking_new_from_dates', methods: ['GET', 'POST'])]
    public function newFromDates(Request $request, BookingRepository $bookingRepository): Response
    {
        $booking = new Booking();
        $dateStartRequest = $this->requestStack->getCurrentRequest()->get('date_start');
        $dateEndRequest = $this->requestStack->getCurrentRequest()->get('date_end');

        $dateStart = DateTime::createFromFormat('Y-m-d\TH:i', $dateStartRequest);
        $dateEnd = DateTime::createFromFormat('Y-m-d\TH:i', $dateEndRequest);

        $dateStart = !$dateStart ? DateTime::createFromFormat('Y-m-d\TH:i:sP', $dateStartRequest) : $dateStart;
        $dateEnd = !$dateEnd ? DateTime::createFromFormat('Y-m-d\TH:i:sP', $dateEndRequest) : $dateEnd;

        $dateStart = !$dateStart ? DateTime::createFromFormat('Y-m-d H:i', $dateStartRequest) : $dateStart;
        $dateEnd = !$dateEnd ? DateTime::createFromFormat('Y-m-d H:i', $dateEndRequest) : $dateEnd;

        $dateStart = !$dateStart ? DateTime::createFromFormat('Y-m-d', $dateStartRequest)->setTime(0, 0, 0) : $dateStart;
        $dateEnd = !$dateEnd ? DateTime::createFromFormat('Y-m-d', $dateEndRequest)->setTime(0, 0, 0) : $dateEnd;

        $booking->setDateStart($dateStart);
        $booking->setDateEnd($dateEnd);

        $form = $this->createForm(BookingType::class, $booking);
        $form->handleRequest($request);

        $bookingSerialized = $this->getBookingSerialized($booking, $bookingRepository);

        if ($form->isSubmitted() && $form->isValid()) {
            if ($booking->getDogs()->count() === 0) {
                $this->addFlash('danger', 'Vous devez selectionner au moins un chien');
                return $this->redirectToRoute('booking_new');
            }

            $this->addFlash('success', 'Réservation créée avec succès');
            $bookingRepository->save($booking, true);

            return $this->redirectToRoute('bookings', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('booking/new.html.twig', [
            'booking' => $booking,
            'bookingSerialized' => $bookingSerialized,
            'form' => $form,
            'dateStart' => $dateStart->format('Y-m-d H:i'),
            'dateEnd' => $dateEnd->format('Y-m-d H:i'),
        ]);
    }

    #[Route('/{id}', name: 'booking_show', methods: ['GET'])]
    public function show(Booking $booking): Response
    {
        return $this->render('booking/show.html.twig', [
            'booking' => $booking,
        ]);
    }

    #[Route('/{id}/edit', name: 'booking_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Booking $booking, BookingRepository $bookingRepository): Response
    {
        $form = $this->createForm(BookingType::class, $booking);
        $form->handleRequest($request);
        $bookingSerialized = $this->getBookingSerialized($booking, $bookingRepository);

        if ($form->isSubmitted() && $form->isValid()) {
            if ($booking->getDogs()->count() === 0) {
                $this->addFlash('danger', 'Vous devez selectionner au moins un chien');
                return $this->redirectToRoute($request->get('_route'), $request->query->all());
            }

            $this->addFlash('success', 'Réservation modifiée avec succès');
            $this->entityManager->persist($booking);
            $this->entityManager->flush();

            return $this->redirectToRoute('bookings');
        }

        return $this->render('booking/edit.html.twig', [
            'booking' => $booking,
            'bookingSerialized' => $bookingSerialized,
            'form' => $form,
        ]);
    }

    /**
     * @throws \Exception
     */
    #[Route('/{id}/edit-dates/{date_start}/{date_end}', name: 'booking_edit_dates', methods: ['GET', 'POST'])]
    public function editDates(Request $request, Booking $booking, BookingRepository $bookingRepository, EntityManagerInterface $entityManager): Response
    {
        $dateStartRequest = $this->requestStack->getCurrentRequest()->get('date_start');
        $dateEndRequest = $this->requestStack->getCurrentRequest()->get('date_end');
        $dateStart = new DateTime();
        $dateEnd = new DateTime();

        $dateStart->setDate(
            (int)substr($dateStartRequest, 0, 4),
            (int)substr($dateStartRequest, 5, 2),
            (int)substr($dateStartRequest, 8, 2)
        )->setTime(
            $dateStartRequest[11] . $dateStartRequest[12],
            $dateStartRequest[14] . $dateStartRequest[15],
            $dateStartRequest[17] . $dateStartRequest[18]);

        $dateEnd->setDate(
            (int)substr($dateEndRequest, 0, 4),
            (int)substr($dateEndRequest, 5, 2),
            (int)substr($dateEndRequest, 8, 2)
        )->setTime(
            $dateEndRequest[11] . $dateEndRequest[12],
            $dateEndRequest[14] . $dateEndRequest[15],
            $dateEndRequest[17] . $dateEndRequest[18]);

        $booking->setDateStart($dateStart);
        $booking->setDateEnd($dateEnd);

        $entityManager->persist($booking);
        $entityManager->flush();

        $this->addFlash('success', 'Dates de réservation modifiées avec succès');

        return $this->redirectToRoute('bookings');
    }

    #[Route('/{id}/delete', name: 'booking_delete', methods: ['POST'])]
    public function delete(Request $request, Booking $booking, BookingRepository $bookingRepository): Response
    {
        if ($this->isCsrfTokenValid('delete' . $booking->getId(), $request->request->get('_token'))) {
            $bookingRepository->remove($booking, true);
        }

        return $this->redirectToRoute('bookings', [], Response::HTTP_SEE_OTHER);
    }

    /**
     * @param BookingRepository $bookingRepository
     * @return array
     */
    public function getBookingsSerialized(BookingRepository $bookingRepository): array
    {
        $bookings = $bookingRepository->findAll();
        $bookingsSerialized = [];
        foreach ($bookings as $booking) {
            $bookingName = '';
            $dogBackgroundColor = null;
            $dogTextColor = null;
            foreach ($booking->getDogs() as $dog) {
                $dogBackgroundColor = $dog->getBackgroundColor();
                $dogTextColor = $dog->getTextColor();
                $bookingName .= $dog->getName() . ' & ';
            }
            $backgroundColor = $booking->getBackgroundColor() ?? $dogBackgroundColor;

            $bookingName = substr($bookingName, 0, -3);

            $dogs = [];
            foreach ($booking->getDogs() as $dog) {
                $dogs[] = [
                    'id' => $dog->getId(),
                    'name' => $dog->getName(),
                ];
            }

            $bookingsSerialized[] = [
                'id' => $booking->getId(),
                'title' => $bookingName,
                'start' => $booking->getDateStart()->format('Y-m-d H:i'),
                'end' => $booking->getDateEnd()->format('Y-m-d H:i'),
                'backgroundColor' => $backgroundColor,
                'borderColor' => $backgroundColor,
                'textColor' => $booking->getTextcolor() ?? $dogTextColor,
                'price' => $booking->getPrice(),
                'inventory' => $booking->getInventory(),
                'comment' => $booking->getComment(),
                'dogs' => $dogs,
                'editable' => true,
            ];
        }
        return $bookingsSerialized;
    }

    public function getBookingSerialized(Booking $booking, BookingRepository $bookingRepository): array
    {
        $bookingName = '';
        $dogBackgroundColor = null;
        $dogTextColor = null;
        foreach ($booking->getDogs() as $dog) {
            $dogBackgroundColor = $dog->getBackgroundColor();
            $dogTextColor = $dog->getTextColor();
            $bookingName .= $dog->getName() . ' & ';
        }
        $backgroundColor = $booking->getBackgroundColor() ?? $dogBackgroundColor;

        $bookingName = substr($bookingName, 0, -3);

        $dogs = [];
        foreach ($booking->getDogs() as $dog) {
            $dogs[] = [
                'id' => $dog->getId(),
                'name' => $dog->getName(),
            ];
        }

        $bookingSerialized = [
            'id' => $booking->getId(),
            'title' => $bookingName,
            'start' => $booking->getDateStart() ? $booking->getDateStart()->format('Y-m-d') : null,
            'end' => $booking->getDateEnd() ? $booking->getDateEnd()->format('Y-m-d') : null,
            'backgroundColor' => $backgroundColor,
            'borderColor' => $backgroundColor,
            'textColor' => $booking->getTextcolor() ?? $dogTextColor,
            'price' => $booking->getPrice(),
            'inventory' => $booking->getInventory(),
            'comment' => $booking->getComment(),
            'dogs' => $dogs,
            'editable' => true,
        ];

        return $bookingSerialized;
    }
}
