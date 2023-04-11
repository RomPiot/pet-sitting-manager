<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ProfitsController extends AbstractController
{
    #[Route('/profits', name: 'profits')]
    public function index(): Response
    {
        return $this->render('profits/index.html.twig', [
            'controller_name' => 'ProfitsController',
        ]);
    }
}
