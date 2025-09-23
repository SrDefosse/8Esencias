import React, { useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiArrowRight, FiX, FiChevronDown } from "react-icons/fi";
import {
  useMotionValueEvent,
  AnimatePresence,
  useScroll,
  motion,
} from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 250 ? true : false);
  });

  return (
    <nav
      className={`fixed top-0 z-50 w-full px-6 text-white transition-all duración-300 ease-out lg:px-12
      ${
        scrolled
          ? "bg-neutral-900/90 border border-white/10 backdrop-blur-xl shadow-2xl py-3"
          : "bg-neutral-900/40 border border-white/5 backdrop-blur-lg shadow-lg py-6"
      }`}
      style={scrolled
        ? {
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            border: "1px solid rgba(255, 255, 255, 0.12)",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.55)",
          }
        : {
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            boxShadow: "0 15px 35px -12px rgba(0, 0, 0, 0.45)",
          }
      }
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Logo />
        <div className="hidden lg:flex">
          <Links />
        </div>
        <MobileMenu />
      </div>
    </nav>
  );
};

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-2">
      <img 
        src="/logos/logo_8esencias_white.png" 
        alt="8 Esencias" 
        className="h-14 w-auto"
      />

    </Link>
  );
};

const Links = () => {
  return (
    <div className="flex items-center gap-6">
      {LINKS.map((l) => (
        <NavLink key={l.text} href={l.href} FlyoutContent={l.component}>
          {l.text}
        </NavLink>
      ))}
    </div>
  );
};

const NavLink = ({ children, href, FlyoutContent }) => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isActive = location.pathname === href;

  const showFlyout = FlyoutContent && open;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative h-fit w-fit"
    >
      <Link to={href} className={`relative ${isActive ? 'text-amber-300' : 'text-white hover:text-amber-300'}`}>
        {children}
        <span
          style={{
            transform: showFlyout || isActive ? "scaleX(1)" : "scaleX(0)",
          }}
          className={`absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full transition-transform duration-300 ease-out ${
            isActive ? 'bg-amber-500' : 'bg-amber-300'
          }`}
        />
      </Link>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-1/2 top-12 bg-white text-black"
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Flyout content components
const NosotrosContent = () => {
  return (
    <div className="grid h-fit w-full grid-cols-12 shadow-xl lg:h-72 lg:w-[600px] lg:shadow-none xl:w-[750px]">
      <div className="col-span-12 flex flex-col justify-between bg-amber-800 p-6 lg:col-span-4">
        <div>
          <h2 className="mb-2 text-xl font-semibold text-white">Nosotros</h2>
          <p className="mb-6 max-w-xs text-sm text-amber-100">
            Tradición familiar en la elaboración de mezcal artesanal mexicano desde hace generaciones.
          </p>
        </div>
        <Link
          to="/about"
          className="flex items-center gap-1 text-xs text-amber-300 hover:underline"
        >
          Conoce más <FiArrowRight />
        </Link>
      </div>
      <div className="col-span-12 grid grid-cols-2 grid-rows-2 gap-3 bg-white p-6 lg:col-span-8">
        <Link
          to="/about"
          className="rounded border-2 border-neutral-200 bg-white p-3 transition-colors hover:bg-neutral-100"
        >
          <h3 className="mb-1 font-semibold">Historia</h3>
          <p className="text-xs">
            Descubre la tradición ancestral detrás de cada botella de 8 Esencias.
          </p>
        </Link>
        <Link
          to="/process"
          className="rounded border-2 border-neutral-200 bg-white p-3 transition-colors hover:bg-neutral-100"
        >
          <h3 className="mb-1 font-semibold">Proceso</h3>
          <p className="text-xs">
            Conoce nuestro método artesanal de producción paso a paso.
          </p>
        </Link>
        <Link
          to="/about#team"
          className="rounded border-2 border-neutral-200 bg-white p-3 transition-colors hover:bg-neutral-100"
        >
          <h3 className="mb-1 font-semibold">Maestros</h3>
          <p className="text-xs">
            Los artesanos que dan vida a nuestros mezcales excepcionales.
          </p>
        </Link>
        <Link
          to="/about#values"
          className="rounded border-2 border-neutral-200 bg-white p-3 transition-colors hover:bg-neutral-100"
        >
          <h3 className="mb-1 font-semibold">Valores</h3>
          <p className="text-xs">
            Los principios que guían cada decisión en 8 Esencias.
          </p>
        </Link>
      </div>
    </div>
  );
};

const MezcalesContent = () => {
  return (
    <div className="w-full bg-white p-6 shadow-none lg:w-[300px] lg:shadow-xl">
      <div className="space-y-6">
        <div className="space-y-3">
          <h3 className="font-semibold text-amber-800">Nuestros Mezcales</h3>
          <Link to="/mezcales" className="block text-sm hover:underline">
            8 Esencias Espadín
          </Link>
          <Link to="/mezcales" className="block text-sm hover:underline">
            8 Esencias Tobalá
          </Link>
          <Link to="/mezcales" className="block text-sm hover:underline">
            8 Esencias Ensamble
          </Link>
          <Link to="/mezcales" className="block text-sm hover:underline">
            8 Esencias Madrecuixe
          </Link>
        </div>
      </div>
      <Link
        to="/mezcales"
        className="mt-6 w-full block text-center rounded-lg border-2 border-amber-600 px-4 py-2 font-semibold transition-colors hover:bg-amber-600 hover:text-white"
      >
        Ver todos los mezcales
      </Link>
    </div>
  );
};

const MobileMenuLink = ({ children, href, FoldContent, setMenuOpen }) => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isActive = location.pathname === href;

  return (
    <div className="relative text-neutral-950">
      {FoldContent ? (
        <div
          className="flex w-full cursor-pointer items-center justify-between border-b border-neutral-300 py-6 text-start text-2xl font-semibold"
          onClick={() => setOpen((pv) => !pv)}
        >
          <Link
            onClick={(e) => {
              e.stopPropagation();
              setMenuOpen(false);
            }}
            to={href}
            className={isActive ? 'text-amber-600' : ''}
          >
            {children}
          </Link>
          <motion.div
            animate={{ rotate: open ? "180deg" : "0deg" }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
          >
            <FiChevronDown />
          </motion.div>
        </div>
      ) : (
        <Link
          onClick={() => setMenuOpen(false)}
          to={href}
          className={`flex w-full cursor-pointer items-center justify-between border-b border-neutral-300 py-6 text-start text-2xl font-semibold ${
            isActive ? 'text-amber-600' : ''
          }`}
        >
          <span>{children}</span>
          <FiArrowRight />
        </Link>
      )}
      {FoldContent && open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="overflow-hidden"
        >
          <div className="py-4 bg-gray-50 px-4 rounded-lg">
            <div className="space-y-2">
              <Link to="/about" onClick={() => setMenuOpen(false)} className="block text-sm hover:text-amber-600">
                Historia
              </Link>
              <Link to="/process" onClick={() => setMenuOpen(false)} className="block text-sm hover:text-amber-600">
                Proceso
              </Link>
              <Link to="/about#team" onClick={() => setMenuOpen(false)} className="block text-sm hover:text-amber-600">
                Maestros
              </Link>
              <Link to="/about#values" onClick={() => setMenuOpen(false)} className="block text-sm hover:text-amber-600">
                Valores
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  
  return (
    <div className="block lg:hidden">
      <button onClick={() => setOpen(true)} className="block text-3xl">
        <FiMenu />
      </button>
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            exit={{ x: "100vw" }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="fixed left-0 top-0 flex h-screen w-full flex-col bg-white"
          >
            <div className="flex items-center justify-between p-6">
              <Link to="/" className="flex items-center gap-2">
                <img 
                  src="/logos/logo_8esencias_black.png" 
                  alt="8 Esencias" 
                  className="h-10 w-auto"
                />
              </Link>
              <button onClick={() => setOpen(false)}>
                <FiX className="text-3xl text-neutral-950" />
              </button>
            </div>
            <div className="h-screen overflow-y-scroll bg-neutral-100 p-6">
              {LINKS.map((l) => (
                <MobileMenuLink
                  key={l.text}
                  href={l.href}
                  FoldContent={l.text === "Nosotros" ? () => null : null}
                  setMenuOpen={setOpen}
                >
                  {l.text}
                </MobileMenuLink>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;

// Navigation links configuration
const LINKS = [
  {
    text: "Inicio",
    href: "/",
  },
  {
    text: "Nosotros",
    href: "/about",
    component: NosotrosContent,
  },
  {
    text: "Mezcales",
    href: "/mezcales",
    component: MezcalesContent,
  },
  {
    text: "Proceso",
    href: "/process",
  },
  {
    text: "Dónde Comprar",
    href: "/where-to-buy",
  },
  {
    text: "Contacto",
    href: "/contact",
  },
];