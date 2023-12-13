import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentsButton extends Schema.Component {
  collectionName: 'components_components_buttons';
  info: {
    displayName: '\uD83E\uDDE9-Button';
    description: '';
  };
  attributes: {
    button: Attribute.Relation<
      'components.button',
      'oneToOne',
      'api::button.button'
    >;
  };
}

export interface ComponentsHeroBanner extends Schema.Component {
  collectionName: 'components_components_hero_banners';
  info: {
    displayName: '\uD83D\uDCE6-HeroBanner';
    description: '';
  };
  attributes: {
    hero_banner: Attribute.Relation<
      'components.hero-banner',
      'oneToOne',
      'api::hero-banner.hero-banner'
    >;
  };
}

export interface ComponentsMedia extends Schema.Component {
  collectionName: 'components_components_medias';
  info: {
    displayName: '\uD83D\uDCF7-Media';
    description: '';
  };
  attributes: {
    image: Attribute.Media;
    altText: Attribute.String;
    EntryTitle: Attribute.String & Attribute.Required & Attribute.Private;
  };
}

export interface ComponentsSectionRealCases extends Schema.Component {
  collectionName: 'components_components_section_real_cases';
  info: {
    displayName: '\uD83D\uDCE6-section-RealCases';
    icon: '';
    description: '';
  };
  attributes: {
    section_real_case: Attribute.Relation<
      'components.section-real-cases',
      'oneToOne',
      'api::section-real-case.section-real-case'
    >;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'components.button': ComponentsButton;
      'components.hero-banner': ComponentsHeroBanner;
      'components.media': ComponentsMedia;
      'components.section-real-cases': ComponentsSectionRealCases;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
    }
  }
}
