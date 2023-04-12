<?php

namespace App\Form;

use App\Entity\Owner;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class OwnerType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('name', TextType::class, [
                'attr' => [
                    'class' => 'form-control',
                ],
            ])
            ->add('address', TextareaType::class, [
                'required' => false,
                'attr' => [
                    'class' => 'form-control',
                ],
            ])
            ->add('contacts', CollectionType::class, [
                'attr' => [
                    'class' => 'form-control',
                ],
                'entry_type' => ContactType::class,
                'allow_add' => true,
                'allow_delete' => true,
                'by_reference' => false,
            ])
            ->add('dogs', EntityType::class, [
                'attr' => [
                    'class' => 'form-control',
                ],
                'required' => false,
                'class' => 'App\Entity\Dog',
                'multiple' => true,
                'expanded' => true,
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Owner::class,
        ]);
    }
}
