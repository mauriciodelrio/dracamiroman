'use client'
import { useRef, useState } from "react"
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";
import { FaTooth } from "react-icons/fa";
import { MdOutlineAttachMoney } from "react-icons/md";
import { IoNewspaperOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";
import { MdOutlineMenu } from "react-icons/md";


const Map = ({ lat, lng }: { lat: number; lng: number }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY || '', // Asegúrate de configurar tu API Key en el archivo .env.local
  });

  const center = useMemo(() => ({ lat, lng }), [lat, lng]);

  if (!isLoaded) return <p>Cargando mapa...</p>;

  return (
    <GoogleMap
      zoom={15} // Ajusta el nivel de zoom según sea necesario
      center={center}
      mapContainerStyle={{ width: "100%", height: "400px" }}
    >
      <Marker position={center} />
    </GoogleMap>
  );
};

export default function Home() {

  const ref = useRef<HTMLDivElement>(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
    setIsOpen(false);
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const date = new Date()
  return (
    <>
      
      <div className="sm:grid sm:grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen sm:pb-20 sm:gap-16">
        <div className="sm:hidden row-start-1 mt-0 flex row-start-1 w-full items-center bg-[var(--base1)]">
        {/* Botón del Menú */}
          <button
            onClick={toggleSidebar}
            className="p-2 m-2 rounded-md focus:outline-none"
          >
            {/* Icono de menú */}
            <MdOutlineMenu size={'1.5em'}/>
          </button>

          {/* Sidebar */}
          {isOpen && (
            <div
              className="fixed inset-0 bg-black opacity-60"
              onClick={toggleSidebar}
            ></div>
          )}
          <div
            className={`fixed top-0 left-0 h-full w-64 bg-[var(--base2)] transform ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300 ease-in-out`}
          >

            {/* Opciones del Menú */}
            <nav className="mt-4 space-y-2 z-1000000">
              <div className="flex justify-center align-center items-center gap-4">
                <a
                  className="block p-2 hover:underline hover:underline-offset-4 hover:bg-[var(--base1)] rounded-md"
                  href="https://www.instagram.com/dra.cami.roman/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  
                  <FaInstagram/>
                </a>
                <a
                  className="block p-2 hover:underline hover:underline-offset-4 hover:bg-[var(--base1)] rounded-md"
                  href="https://www.tiktok.com/@dra.cami.roman"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  
                  <FaTiktok/>
                </a>
              </div>
              
              <a
                className="flex justify-center align-center items-center gap-4 p-2 hover:underline hover:underline-offset-4 hover:bg-[var(--base1)] rounded-md"
                href="mailto:c.romangatica@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CiMail /> c.romangatica@gmail.com
              </a>
              <a
                className="flex justify-center align-center items-center gap-4 p-2 hover:underline hover:underline-offset-4 hover:bg-[var(--base1)] rounded-md"
                href="https://wa.me/56945449847"
                target="_blank"
                rel="noopener noreferrer"
              >
                
                <FaWhatsapp /> +(56) 9 4544 9847 
              </a>
              <a
                className="flex justify-center align-center items-center gap-4 p-2 hover:underline hover:underline-offset-4 hover:bg-[var(--base1)] rounded-md"
                onClick={handleClick}
              >
                
                <FaCalendar />  AGENDA TU HORA 
              </a>
            </nav>
          </div>

          {/* Fondo Oscuro al abrir el menú */}
          
        </div>
        <div className="xs:hidden sm:flex row-start-1 w-full items-center">
          <div className="bg-[var(--base2)] w-full p-4 absolute"></div>
          <div className="bg-[var(--base1)] w-full mt-28 flex flex-end justify-end gap-6">
            <div className="flex items-center gap-2">
                <a
                  className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                  href="https://www.instagram.com/dra.cami.roman/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  
                  <FaInstagram/>
                </a>
                <a
                  className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                  href="https://www.tiktok.com/@dra.cami.roman"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  
                  <FaTiktok/>
                </a>
            </div>
            <div className="hover:bg-[var(--base2)] p-8 flex justify-start gap-2 hover:cursor-pointer">
              <div className="flex items-center">
                <CiMail />
              </div>
              <div className="flex items-center">
                <a href="mailto:c.romangatica@gmail.com" target="__blank">
                  c.romangatica@gmail.com
                </a>
              </div>
              
            </div>
            <div className="hover:bg-[var(--base2)] p-8 flex justify-start gap-2 hover:cursor-pointer">
              <div className="flex items-center">
                <FaWhatsapp />
              </div>
              <div className="flex items-center">
                <a className="cursor-pointer" href="https://wa.me/56945449847" target="__blank">
                  +(56) 9 4544 9847 
                </a>
              </div>
              
            </div>
            <div className="hover:bg-[var(--base2)] px-8 py-4 flex justify-start gap-4 hover:cursor-pointer" onClick={handleClick}>
              <div className="flex items-center">
                AGENDA TU HORA 
              </div>
              <div className="flex items-center">
                <FaCalendar/>
              </div>
            </div>
          </div>
        </div>
        <main className="flex flex-col gap-8 row-start-2 items-center mt-6 xs:mt-0 sm:mt-6 w-full">
          <div className="w-full xs:bg-center sm:bg-cover sm:bg-no-repeat sm:bg-cover sm:bg-fixed" style={{backgroundImage: "url('1.jpg')"}}>
            <div className="w-full xs:px-4 xs:py-8 px-16 py-40 sm:flex gap-8 items-center justify-center bg-cover bg-center bg-gradient-to-t from-black/75 to-transparent">
              <div className="xs:w-fit w-2/3">
                <div>
                  <h1 className="xs:text-5xl sm:mt-4 sm:text-8xl">Dra Cami Román</h1>
                  <h3 className="xs:text-2xl sm:text-3xl mt-4">Odontóloga general</h3>
                </div>
                <div className="xs:max-w-96 sm:max-w-[600px] mt-8 xs:text-base xs:mb-4 sm:text-lg text-gray-200 w-auto text-wrap">
                  ¡Hola! Soy Camila Román, odontóloga general con un enfoque social y apasionada por las sonrisas auténticas. Mi misión es simple: ofrecer diagnósticos integrales para devolver armonía y funcionalidad a cada sonrisa que cuido. ¿Quieres una sonrisa renovada y llena de confianza? ¡Estás en el lugar adecuado!
                </div>
              </div>
              <div className="flex w-[300px] bg-[var(--base1)] gap-4 hover:cursor-pointer hover:bg-[var(--base2)] border-0 rounded-lg justify-between items-center h-auto px-6 py-4" onClick={handleClick}>
                AGENDA TU HORA  <FaCalendar/>
              </div> 
                
            </div>
          </div>    
          
          <div className="sm:w-full p-16 md:flex items-start justify-center bg-[var(--base1)] align-center gap-16">

            <div className="flex flex-col items-center max-w-[400px] h-84 content-between">
              <div><FaTooth size={'5em'} color="var(--fontColor4)"/></div>
              <div className="text-lg font-bold text-[var(--fontColor4)] mt-2">Atención Integral</div>
              <div className="mt-4">
                ¡Transforma tu sonrisa con una atención integral y personalizada! En cada consulta, analizo todos los aspectos de tu salud dental para diseñar un plan de rehabilitación oral hecho a tu medida. Aquí no se trata solo de dientes, ¡Se trata de tu bienestar y confianza! Te guío paso a paso hacia la sonrisa saludable y armónica que siempre has querido.
              </div>
            </div>
            <div className="flex flex-col flex-wrap justify-center items-center max-w-[400px] h-84 content-between">
              <div><MdOutlineAttachMoney size={'5em'} color="var(--fontColor4)"/></div>
              <div className="text-lg font-bold text-[var(--fontColor4)] mt-2">Precios Justos</div>
              <div className="mt-4">
                ¡Sonríe sin preocuparte por el bolsillo! Aquí encontrarás precios justos y accesibles, diseñados para cuidar tu sonrisa sin sorpresas ni sobrediagnósticos. Me enfoco en lo que realmente necesitas para una salud dental óptima, con tratamientos transparentes y honestos.
              </div>
            </div>
            <div className="flex flex-col justify-center items-center max-w-[400px] h-84 content-between">
              <div><IoNewspaperOutline size={'5em'} color="var(--fontColor4"/></div>
              <div className="text-lg font-bold text-[var(--fontColor4)] mt-2">Reportes de Atención</div>
              <div className="mt-4">
                ¡Transparencia total en tu tratamiento! Al finalizar cada sesión, recibirás un resumen detallado en tu correo con todo lo realizado. Así, siempre sabrás exactamente qué procedimientos se llevaron a cabo.
              </div>
            </div>

          </div>

          <div ref={ref} className="w-full gap-8 p-16 bg-[var(--base3)]">
            <h2 className="text-4xl font-bold mb-12 w-full text-center text-[var(--fontBlack)]">Agenda tu hora</h2>
            <div className="flex xs:flex-col sm:flex-row items-center justify-center mb-8 align-center xs:gap-8 sm:gap-16">
              <div className="w-[350px] bg-[var(--base1)] hover:cursor-pointer hover:bg-[var(--base2)] border-0 rounded-lg h-auto p-6">
                <a className="w-full flex gap-2 justify-between items-center" href="https://agenda-online.cimadent.cl/DraCamiRom%C3%A1n" target="__blank">
                  Agenda tu hora particular  <FaCalendar/>
                </a>
              </div> 
              <div className="w-[350px] bg-[var(--base1)] hover:cursor-pointer hover:bg-[var(--base2)] border-0 rounded-lg h-auto p-6">
              <a className="w-full flex gap-2 justify-between items-center" href="https://ff.healthatom.io/KRsSUw" target="__blank">
                  Agenda tu hora por Dentaesthetic <FaCalendar/>
                </a>
              </div> 
            </div>
          </div>

          <div className="w-full gap-8 p-8 flex flex-col items-center justify-around mt-4 mb-8">
            <h2 className="text-4xl font-bold mb-8 w-full text-center text-[var(--fontBlack)]"> Ubicación </h2>
            <div className="sm:w-2/3"> 
              <h3 className="w- full text-center text-xl font-semibold mb-4 text-[var(--fontBlack)]"> <span className="text-[var(--fontColor5)]">Dentaesthetic La Reina: </span> Av. Echeñique 5839 Of. 416</h3>
              <Map lat={-33.445343123583434} lng={-70.57070653116264} />
            </div>
            <div className="sm:w-2/3 mt-6"> 
              <h3 className="w- full text-center text-xl font-semibold mb-4 text-[var(--fontBlack)]"> <span className="text-[var(--fontColor5)]">Clínica Campeny - Atención Particular </span> Dr. Manuel Barros Borgoño 71 Of. 502 </h3>
              <Map lat={-33.42943020303719} lng={-70.6191043599986} />
            </div>
            <div className="sm:w-2/3 mt-6"> 
              <h3 className="w- full text-center text-xl font-semibold mb-4 text-[var(--fontBlack)]"> <span className="text-[var(--fontColor5)]">Dentaesthetic La Florida: </span> Av. Vicuña Mackenna Poniente 7255 Edificio Bellavista Of. 514</h3>
              <Map lat={-33.52090817094136} lng={-70.60167405809595} />
            </div> 
          </div>

          
        </main>
        <footer className="row-start-3 bg-[var(--base2)] w-full p-9">
          <div className="flex gap-6 flex-wrap items-center justify-center">
            <div className="font-bold">
              Sígueme en mis redes:
            </div>
              <a
                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href="https://www.instagram.com/dra.cami.roman/"
                target="_blank"
                rel="noopener noreferrer"
              >
                
                <FaInstagram/>
              </a>
              <a
                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href="https://www.tiktok.com/@dra.cami.roman"
                target="_blank"
                rel="noopener noreferrer"
              >
                
                <FaTiktok/>
              </a>
              <a
                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href="https://wa.me/56945449847"
                target="_blank"
                rel="noopener noreferrer"
              >
                
                <FaWhatsapp/>
              </a> 
          </div>
          <div className="flex flex-row items-center justify-center mt-6">
            © Dra Cami Román - {date.getFullYear()} 
          </div> 
          <div className="flex flex-row items-center justify-center mt-2">
            Hecho con ❤️
          </div>       
        </footer>
      </div>
    </>
    
  );
}
