<?php

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\DateTimeType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\OptionsResolver\OptionsResolver;

class DateTimeFrenchType extends AbstractType
{
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'widget' => 'single_text',
            'format' => 'dd-MM-yyyy HH:mm',
            'html5' => false,
            'attr' => [
                'readonly' => true,
                'class' => 'form-control datetimepicker active w-100',
            ]
        ]);
    }

    public function getParent(): string
    {
        return DateTimeType::class;
    }
}
