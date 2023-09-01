<?php

namespace App\Service;

use App\Entity\Booking;
use DateTime;

class BookingService
{
    /**
     * @param Booking[] $bookings
     * @param string $type
     * @return string
     */
    public function calculateProfits(array $bookings, string $type = 'total'): string
    {
        $profits = 0;
        foreach ($bookings as $booking) {

            if ($type == 'total') {
                $profits += $booking->getPrice();
            } elseif ($type == 'current') {
                if ($booking->getDateStart() <= new DateTime()) {
                    $profits += $booking->getPrice();
                }
            } elseif ($type == 'coming') {
                if ($booking->getDateStart() > new DateTime()) {
                    $profits += $booking->getPrice();
                }
            }
        }

        return $this->convertIntToEuros($profits);
    }

    public function calculateProfitsDeclared(array $bookings, bool $convertInEuros = true): string
    {
        $profits = 0;
        foreach ($bookings as $booking) {
            if ($booking->isDeclared()) {
                $profits += $booking->getPrice();
            }
        }

        if ($convertInEuros) {
            return $this->convertIntToEuros($profits);
        }

        return $profits;
    }

    public function calculateProfitsUndeclared(array $bookings, bool $convertInEuros = true): string
    {
        $profits = 0;
        foreach ($bookings as $booking) {
            if (!$booking->isDeclared()) {
                $profits += $booking->getPrice();
            }
        }

        if ($convertInEuros) {
            return $this->convertIntToEuros($profits);
        }

        return $profits;
    }

    public function convertIntToEuros(int $profits): string
    {
        $profits = floatval($profits);
        return number_format(floatval($profits), 0, ',', ' ') . ' €';
    }

    /**
     * @param Booking[] $bookings
     * @return string[]
     */
    public function calculateProfitsDeclaredPerMonth(array $bookings): array
    {
        $profits = [];
        foreach ($bookings as $booking) {
            if ($booking->isDeclared()) {
                $month = (int)$booking->getDateStart()->format('m');
                $profits[$month] = $profits[$month] ?? 0;
                $profits[$month] += $booking->getPrice();
            }
        }

        return $profits;
    }

    /**
     * @param Booking[] $bookings
     * @return string[]
     */
    public function calculateProfitsUndeclaredPerMonth(array $bookings): array
    {
        $profits = [];
        foreach ($bookings as $booking) {
            if (!$booking->isDeclared()) {
                $month = (int)$booking->getDateStart()->format('m');
                $profits[$month] = $profits[$month] ?? 0;
                $profits[$month] += $booking->getPrice();
            }
        }

        return $profits;
    }
}
