<?php

namespace App\Form;

use App\Entity\Dog;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\ColorType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class DogType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('name', TextType::class, [
                'attr' => [
                    'class' => 'form-control',
                ],
            ])
            ->add('backgroundColor', ColorType::class,
                [
                    'attr' => [
                        'class' => 'form-control',
                    ],
                ])
            ->add('textColor', ColorType::class, [
                'attr' => [
                    'class' => 'form-control',
                ],
            ])
            ->add('Owner', EntityType::class, [
                'required' => false,
                'class' => 'App\Entity\Owner',
                'attr' => [
                    'class' => 'form-control',
                ],
            ])
            ->add('birthday', DateFrenchType::class, [
                'required' => false,
            ])
            ->add('breed', TextareaType::class, [
                'required' => false,
                'attr' => [
                    'class' => 'form-control',
                ],
            ])
            ->add('food', TextareaType::class, [
                'required' => false,
                'attr' => [
                    'class' => 'form-control',
                ],
            ])
        ;

    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Dog::class,
        ]);
    }
}
