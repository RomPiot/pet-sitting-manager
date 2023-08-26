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
                'label' => 'Nom',
            ])
            ->add('backgroundColor', ColorType::class,
                [
                    'attr' => [
                        'class' => 'form-control',
                    ],
                    'label' => 'Couleur de fond',
                ])
            ->add('textColor', ColorType::class, [
                'attr' => [
                    'class' => 'form-control',
                ],
                'label' => 'Couleur du texte',
            ])
            ->add('Owner', EntityType::class, [
                'required' => false,
                'class' => 'App\Entity\Owner',
                'attr' => [
                    'class' => 'form-control choices-js',
                ],
                'label' => 'Propriétaire',
            ])
            ->add('birthday', DateFrenchType::class, [
                'required' => false,
                'label' => 'Date de naissance',
            ])
            ->add('breed', TextType::class, [
                'required' => false,
                'attr' => [
                    'class' => 'form-control',
                ],
                'label' => 'Race'
            ])
            ->add('food', TextareaType::class, [
                'required' => false,
                'attr' => [
                    'class' => 'form-control tinymce',
                ],
                'label' => 'Alimentation',
            ])
            ->add('note', TextareaType::class, [
                'required' => false,
                'attr' => [
                    'class' => 'form-control tinymce',
                ],
                'label' => 'Note',
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
