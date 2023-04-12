<?php

namespace App\Repository;

use App\Entity\Booking;
use App\Entity\Dog;
use DateTime;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Booking>
 *
 * @method Booking|null find($id, $lockMode = null, $lockVersion = null)
 * @method Booking|null findOneBy(array $criteria, array $orderBy = null)
 * @method Booking[]    findAll()
 * @method Booking[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class BookingRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Booking::class);
    }

    public function save(Booking $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(Booking $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return Booking[] Returns an array of Booking objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('b')
//            ->andWhere('b.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('b.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?Booking
//    {
//        return $this->createQueryBuilder('b')
//            ->andWhere('b.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
    public function findByDateRange(DateTime $dateStart, DateTime $dateEnd)
    {
        return $this->createQueryBuilder('b')
            ->andWhere('b.dateStart >= :dateStart')
            ->andWhere('b.dateEnd <= :dateEnd')
            ->setParameter('dateStart', $dateStart)
            ->setParameter('dateEnd', $dateEnd)
            ->getQuery()
            ->getResult();
    }

    /**
     * @param DateTime $dateStart
     * @param DateTime $dateEnd
     * @param bool $isDeclared
     * @param array<Dog> $dogs
     * @return void
     */
    public function findByFilterBookinksForm(DateTime $dateStart, DateTime $dateEnd, bool $isDeclared, ArrayCollection $dogs): ?array
    {
        $queryBuilder = $this->createQueryBuilder('b')
            ->andWhere('b.dateStart >= :dateStart')
            ->andWhere('b.dateEnd <= :dateEnd')
            ->setParameter('dateStart', $dateStart)
            ->setParameter('dateEnd', $dateEnd)
            ->andWhere('b.declared = :isDeclared')
            ->setParameter('isDeclared', $isDeclared);

        if ($dogs->count() > 0) {
            $queryBuilder->join('b.dogs', 'd')
                ->andWhere('d.id IN (:dogIds)')
                ->setParameter('dogIds', $dogs->map(function($dog) { return $dog->getId(); })->toArray());
        }

        return $queryBuilder->getQuery()->getResult();
    }
}
