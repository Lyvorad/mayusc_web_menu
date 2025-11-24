import React from 'react';
import { TextToolsSection } from '../sections/TextToolsSection';
import { ProfileSection } from '../sections/ProfileSection';
import { SettingsSection } from '../sections/SettingsSection';
import { HelpSection } from '../sections/HelpSection';

export function renderSection(currentSection, props) {
  const sectionProps = {
    texttools: {
      component: TextToolsSection,
      props: {}
    },
    profile: {
      component: ProfileSection,
      props: {
        nombre: props.nombre,
        onNombreChange: props.setNombre
      }
    },
    settings: {
      component: SettingsSection,
      props: {}
    },
    help: {
      component: HelpSection,
      props: {}
    }
  };

  const sectionConfig = sectionProps[currentSection] || sectionProps.texttools;
  const SectionComponent = sectionConfig.component;
  
  return <SectionComponent {...sectionConfig.props} />;
}