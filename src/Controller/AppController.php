<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class AppController extends AbstractController
{
    /**
     * @Route("{wildcard}", name="app", requirements={"wildcard"="^(?!build|api|_(profiler|wdt)).*"})
     */
    public function index()
    {
        return $this->render('app.html.twig');
    }
}
