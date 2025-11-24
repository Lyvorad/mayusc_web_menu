import React from 'react';
import { HomeSection } from '../sections/HomeSection';
import { ProfileSection } from '../sections/ProfileSection';
import { SettingsSection } from '../sections/SettingsSection';
import { HelpSection } from '../sections/HelpSection';

export function renderSection(currentSection, props) {
  const sectionProps = {
    home: {
      component: HomeSection,
      props: {
        nombre: props.nombre,
        onNombreChange: props.setNombre,
        respuesta: props.respuesta,
        onConsultar: props.onConsultar,
        onEnviar: props.onEnviar
      }
    },
    perfil: {
      component: ProfileSection,
      props: {
        nombre: props.nombre,
        onNombreChange: props.setNombre
      }
    },
    configuracion: {
      component: SettingsSection,
      props: {}
    },
    ayuda: {
      component: HelpSection,
      props: {}
    }
  };

  const sectionConfig = sectionProps[currentSection] || sectionProps.home;
  const SectionComponent = sectionConfig.component;
  
  return <SectionComponent {...sectionConfig.props} />;
}