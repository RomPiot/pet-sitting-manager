<?php

namespace App\Form;

use App\Entity\Dog;
use DateTime;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class FilterDashboardType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('dateStart', DateFrenchType::class, [
                'required' => false,
                'data' => new DateTime('first day of January'),
                'label' => 'Du',
            ])
            ->add('dateEnd', DateFrenchType::class, [
                'required' => false,
                'data' => new DateTime('last day of December'),
                'label' => 'au',
            ])
            ->add('submit', SubmitType::class, [
                'label' => 'Filter',
                'attr' => [
                    'class' => 'form-control btn btn-success',
                ],
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'attr' => [
                'class' => 'mb-3',
            ],
        ]);
    }
}
