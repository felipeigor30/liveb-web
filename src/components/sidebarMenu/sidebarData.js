import React from 'react'


import { FaUserCircle, FaFileContract, FaHome } from 'react-icons/fa'
import { GiPaperPlane } from 'react-icons/gi'
import { AiFillDollarCircle } from 'react-icons/ai'
import { BiSupport } from 'react-icons/bi'

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/',
    icon: <FaHome />,
    cName: 'nav-text'
  },
  {
    title: 'Perfil',
    path: '/profile',
    icon: <FaUserCircle />,
    cName: 'nav-text'
  },
  {
    title: 'Planos',
    path: '/plan',
    icon: <GiPaperPlane />,
    cName: 'nav-text'
  },
  {
    title: 'Cotas',
    path: '/shares',
    icon: <AiFillDollarCircle />,
    cName: 'nav-text'
  },
  {
    title: 'Contrato',
    path: '/contract',
    icon: <FaFileContract />,
    cName: 'nav-text'
  },
  {
    title: 'Suporte',
    path: '/support',
    icon: <BiSupport />,
    cName: 'nav-text'
  },

]