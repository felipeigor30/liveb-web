import React from 'react'


import { FaUserCircle, FaFileContract, FaHome } from 'react-icons/fa'
import { GiPaperPlane } from 'react-icons/gi'
import { AiFillDollarCircle, AiOutlineLogout } from 'react-icons/ai'
import { BiSupport } from 'react-icons/bi'



export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/',
    icon: <FaHome />,
    cName: 'nav-text'
  },
  {
    title: 'Investir',
    path: '/plan',
    icon: <AiFillDollarCircle />,
    cName: 'nav-text'
  },
  {
    title: 'Perfil',
    path: '/profile',
    icon: <FaUserCircle />,
    cName: 'nav-text'
  },
  {
    title: 'Suporte',
    path: '/support',
    icon: <BiSupport />,
    cName: 'nav-text'
  },
  {
    title: 'Sair',
    path: '/logout',
    icon: <AiOutlineLogout />,
    cName: 'nav-text'
  },

]