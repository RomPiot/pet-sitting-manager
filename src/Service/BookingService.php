<?php

namespace App\Service;

class BookingService
{
    public function calculateProfits(array $bookings): string
    {
        $profits = 0;
        foreach ($bookings as $booking) {
            $profits += $booking->getPrice();
        }

        return $this->convertIntToEuros($profits);
    }

    public function calculateProfitsDeclared(array $bookings): string
    {
        $profits = 0;
        foreach ($bookings as $booking) {
            if ($booking->isDeclared()) {
                $profits += $booking->getPrice();
            }
        }

        return $this->convertIntToEuros($profits);

    }

    public function calculateProfitsUndeclared(array $bookings): string
    {
        $profits = 0;
        foreach ($bookings as $booking) {
            if (!$booking->isDeclared()) {
                $profits += $booking->getPrice();
            }
        }

        return $this->convertIntToEuros($profits);
    }

    public function convertIntToEuros(int $profits): string
    {
        $profits = floatval($profits);
        return number_format(floatval($profits), 0, ',', ' ') . ' €';
    }
}
