<?php

namespace App\Form;

use App\Entity\Booking;
use App\Entity\Dog;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\ColorType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class BookingType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('dateStart', DateFrenchType::class,)
            ->add('dateEnd', DateFrenchType::class)
            ->add('dogs', EntityType::class, [
                'required' => false,
                'class' => Dog::class,
                'multiple' => true,
                'attr' => [
                    'class' => 'form-control choices-js',
                ],
            ])
            ->add('price', IntegerType::class, [
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
            ->add('inventory', TextareaType::class, [
                'attr' => [
                    'class' => 'tinymce',
                ],
            ])
            ->add('comment', TextareaType::class, [
                'attr' => [
                    'class' => 'tinymce',
                ],
            ])
            ->add('backgroundColor', ColorType::class)
            ->add('textColor', ColorType::class)
            ->add('submit', SubmitType::class, [
                'label' => 'Créer',
                'attr' => [
                    'class' => 'form-control btn btn-primary',
                    'data-bs-dismiss' => 'modal'
                ],
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Booking::class,
        ]);
    }
}
