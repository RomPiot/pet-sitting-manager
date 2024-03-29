<?php

namespace App\Form;

use App\Entity\Booking;
use App\Entity\Dog;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\ColorType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class BookingType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        if (array_key_exists('data', $options) && ($options['data'] instanceof Booking)) {
            /** @var Booking $booking */
            $booking = $options['data'];
        } else {
            $booking = new Booking();
        }

        $builder
            ->add('dateStart', DateTimeFrenchType::class,
                [
                    'data' => $booking->getDateStart(),
                    'label' => 'Date de début',
                ])
            ->add('dateEnd', DateTimeFrenchType::class, [
                'data' => $booking->getDateEnd(),
                'label' => 'Date de fin',
            ])
            ->add('dogs', EntityType::class, [
                'required' => false,
                'class' => Dog::class,
                'multiple' => true,
                'attr' => [
                    'class' => 'form-control choices-js',
                ],
                'data' => $booking->getDogs(),
                'choice_value' => 'id',
                'label' => 'Chiens',
            ])
            ->add('price', IntegerType::class, [
                'attr' => [
                    'class' => 'form-control',
                ],
                'data' => $booking->getPrice() ?? 0,
                'label' => 'Prix',
            ])
            ->add('declared', CheckboxType::class, [
                'required' => false,
                'attr' => [
                    'class' => 'form-check-input'
                ],
                'label_attr' => [
                    'class' => 'form-check-label'
                ],
                'data' => $booking->isDeclared() ?? false,
                'label' => 'Déclaré',
            ])
            ->add('inventory', TextareaType::class, [
                'required' => false,
                'attr' => [
                    'class' => 'tinymce',
                ],
                'data' => $booking->getInventory() ?? '',
                'label' => 'Inventaire',
            ])
            ->add('comment', TextareaType::class, [
                'required' => false,
                'attr' => [
                    'class' => 'tinymce',
                ],
                'data' => $booking->getComment() ?? '',
                'label' => 'Commentaire',
            ])
            ->add('backgroundColor', ColorType::class,
                [
                    'data' => $booking->getBackgroundColor() ?? '#24A39B',
                    'attr' => [
                        'class' => 'form-control',
                    ],
                    'label' => 'Couleur de fond',
                ]
            )
            ->add('textColor', ColorType::class, [
                'data' => $booking->getTextColor() ?? '#FFFFFF',
                'attr' => [
                    'class' => 'form-control',
                ],
                'label' => 'Couleur du texte',
            ])
//            ->add('submit', SubmitType::class, [
//                'label' => 'Create',
//                'attr' => [
//                    'class' => 'form-control btn btn-primary',
//                ],
//            ])
;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Booking::class,
        ]);
    }
}
