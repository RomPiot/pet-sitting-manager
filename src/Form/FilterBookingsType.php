<?php

namespace App\Form;

use App\Entity\Dog;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class FilterBookingsType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('dateStart', DateFrenchType::class, [
                'required' => false,
                'label' => 'Date de début',
            ])
            ->add('dateEnd', DateFrenchType::class, [
                'required' => false,
                'label' => 'Date de fin',
            ])
            ->add('dogs', EntityType::class, [
                'required' => false,
                'class' => Dog::class,
                'multiple' => true,
                'attr' => [
                    'class' => 'form-control choices-js',
                ],
                'label' => 'Chiens',
            ])
            ->add('declared', CheckboxType::class, [
                'required' => false,
                'attr' => [
                    'class' => 'form-check-input'
                ],
                'label_attr' => [
                    'class' => 'form-check-label'
                ],
                'label' => 'Déclaré',
            ])
            ->add('submit', SubmitType::class, [
                'label' => 'Filter',
                'attr' => [
                    'class' => 'form-control',
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
