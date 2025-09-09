
import React from 'react';
import { Phase } from './types';

const HumanResourcesIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);

const MaterialResourcesIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

const FinancialResourcesIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01M12 6v-1h4v1m-4 0H8v-1h4v1zm-4 6v-1h4v1m-4 0H8v-1h4v1zm-4 6v-1h4v1m-4 0H8v-1h4v1zM12 18V5m0 13a9 9 0 100-18 9 9 0 000 18z" />
    </svg>
);


export const PHASES_DATA: Phase[] = [
  {
    number: 1,
    title: "Diseño y desarrollo",
    description: "del MVP",
    categories: [
      {
        title: "Recursos Humanos",
        icon: <HumanResourcesIcon />,
        items: [
          { text: "Equipo de desarrollo", subtext: "2-3 integrantes", details: "Encargados de programar el sistema, configurar el hosting, gestionar base de datos y crear interfaz." },
          { text: "Diseñador UX/UI", subtext: "1 integrante", details: "Diseño de prototipo en Canva, maquetación simple y accesible." },
          { text: "Líder de proyecto", subtext: "1 integrante", details: "Planificación, asignación de tareas en ClickUp y gestión del cronograma." },
        ],
      },
      {
        title: "Recursos Materiales",
        icon: <MaterialResourcesIcon />,
        items: [
          { text: "Laptops personales", details: "Con software libre (VSCode, GitHub etc.)." },
          { text: "Plataforma gratuita ClickUp", details: "Para gestión de tareas." },
          { text: "Canva (versión gratuita)", details: "Para prototipado." },
          { text: "Internet estable y cuentas en GitHub", details: "Para control de versiones." },
          { text: "Documentación en Google Docs/Sheets", details: "Sin costo adicional." },
        ],
      },
      {
        title: "Recursos Financieros",
        icon: <FinancialResourcesIcon />,
        items: [
          { text: "Dominio web .pe", subtext: "140 soles", details: "Para la identidad profesional y confianza del usuario." },
          { text: "Hosting en la nube", subtext: "78 soles", details: "Para 3 meses." },
          { text: "Materiales de documentación", subtext: "10 soles", details: "PDFs, guías rápidas, plantillas." },
        ],
      },
    ],
  },
  {
    number: 2,
    title: "Pruebas piloto e implementación",
    description: "inicial en MYPES",
    categories: [
      {
        title: "Recursos Humanos",
        icon: <HumanResourcesIcon />,
        items: [
          { text: "Equipo de campo", subtext: "2 integrantes", details: "Aplicación de pruebas piloto, toma de feedback, entrevistas." },
          { text: "Facilitador de capacitación", subtext: "1 integrante", details: "Encargado de guiar a los dueños y colaboradores de las MYPES." },
          { text: "Analista", subtext: "1 integrante", details: "Evaluación de métricas de reducción de pérdidas y puntos de mejora." },
        ],
      },
      {
        title: "Recursos Materiales",
        icon: <MaterialResourcesIcon />,
        items: [
            { text: "Manuales digitales", details: "De uso del sistema." },
            { text: "Encuestas y formularios", details: "Google Forms, gratuitos." },
            { text: "Transporte para visitas", details: "A las MYPES piloto." },
            { text: "Dispositivos móviles o laptops", details: "Para demostraciones." },
        ],
      },
      {
        title: "Recursos Financieros",
        icon: <FinancialResourcesIcon />,
        items: [
          { text: "Incentivos a MYPES piloto", subtext: "40 soles", details: "Estimular participación y colaboración." },
          { text: "Transporte/logística", subtext: "30 soles", details: "Visitas a negocios en Lima Metropolitana." },
          { text: "Material de capacitación", subtext: "12 soles", details: "PDFs, guías rápidas, plantillas." },
        ],
      },
    ],
  },
];
