<?php

namespace App\Form;

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
            ])
            ->add('dateEnd', DateFrenchType::class, [
                'required' => false,
            ])
            ->add('dogs', EntityType::class, [
                'required' => false,
                'class' => 'App\Entity\Dog',
                'multiple' => true,
                'expanded' => true,
                'attr' => [
                    'class' => 'form-control',
                ],
            ])
            ->add('declared', CheckboxType::class, [
                'required' => false,
                'attr' => [
                    'class' => 'form-check-input'
                ],
                'label_attr' => [
                    'class' => 'form-check-label'
                ]
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
