<?php

namespace App\Controller;

use App\Entity\Dog;
use App\Form\DogType;
use App\Repository\DogRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/dog')]
class DogController extends AbstractController
{
    #[Route('/', name: 'dog_list', methods: ['GET'])]
    public function index(DogRepository $dogRepository): Response
    {
        return $this->render('dog/index.html.twig', [
            'dogs' => $dogRepository->findAll(),
        ]);
    }

    #[Route('/new', name: 'dog_new', methods: ['GET', 'POST'])]
    public function new(Request $request, DogRepository $dogRepository): Response
    {
        $dog = new Dog();
        $form = $this->createForm(DogType::class, $dog);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $dogRepository->save($dog, true);

            return $this->redirectToRoute('dog_list', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('dog/new.html.twig', [
            'dog' => $dog,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'dog_show', methods: ['GET'])]
    public function show(Dog $dog): Response
    {
        return $this->render('dog/show.html.twig', [
            'dog' => $dog,
        ]);
    }

    #[Route('/{id}/edit', name: 'dog_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Dog $dog, DogRepository $dogRepository): Response
    {
        $form = $this->createForm(DogType::class, $dog);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $dogRepository->save($dog, true);

            return $this->redirectToRoute('dog_list', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('dog/edit.html.twig', [
            'dog' => $dog,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'dog_delete', methods: ['POST'])]
    public function delete(Request $request, Dog $dog, DogRepository $dogRepository): Response
    {
        if ($this->isCsrfTokenValid('delete'.$dog->getId(), $request->request->get('_token'))) {
            $dogRepository->remove($dog, true);
        }

        return $this->redirectToRoute('dog_list', [], Response::HTTP_SEE_OTHER);
    }
}
