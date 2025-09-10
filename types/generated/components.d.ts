import type { Schema, Struct } from '@strapi/strapi';

export interface AboutMedia extends Struct.ComponentSchema {
  collectionName: 'components_about_media';
  info: {
    displayName: 'Media Block';
  };
  attributes: {
    title: Schema.Attribute.String;
    video: Schema.Attribute.Component<'media.video', true>;
  };
}

export interface AboutTeam extends Struct.ComponentSchema {
  collectionName: 'components_about_team';
  info: {
    displayName: 'Team Block';
  };
  attributes: {
    members: Schema.Attribute.Component<'team.member', true> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String;
  };
}

export interface ContactFieldEmail extends Struct.ComponentSchema {
  collectionName: 'components_contact_field_emails';
  info: {
    displayName: 'Field Email';
  };
  attributes: {
    name: Schema.Attribute.String;
    rules: Schema.Attribute.Component<'contact.rules', false>;
  };
}

export interface ContactFieldMessage extends Struct.ComponentSchema {
  collectionName: 'components_contact_field_messages';
  info: {
    displayName: 'Field Message';
  };
  attributes: {
    collaborate: Schema.Attribute.Component<'contact.text-block', false>;
    feedback: Schema.Attribute.Component<'contact.text-block', false>;
    interview: Schema.Attribute.Component<'contact.text-block', false>;
    name: Schema.Attribute.String;
    other: Schema.Attribute.Component<'contact.text-block', false>;
    rules: Schema.Attribute.Component<'contact.rules', false>;
    workshop: Schema.Attribute.Component<'contact.text-block', false>;
  };
}

export interface ContactFieldSubject extends Struct.ComponentSchema {
  collectionName: 'components_contact_field_subjects';
  info: {
    displayName: 'Field Subject';
  };
  attributes: {
    name: Schema.Attribute.String;
    options: Schema.Attribute.Enumeration<['workshop ', 'feedback', 'other']>;
  };
}

export interface ContactFieldText extends Struct.ComponentSchema {
  collectionName: 'components_contact_field_texts';
  info: {
    displayName: 'Field Text';
  };
  attributes: {
    name: Schema.Attribute.String;
    rules: Schema.Attribute.Component<'contact.rules', false>;
  };
}

export interface ContactForm extends Struct.ComponentSchema {
  collectionName: 'components_contact_forms';
  info: {
    displayName: 'Form';
  };
  attributes: {
    email: Schema.Attribute.Component<'contact.field-email', false>;
    first_name: Schema.Attribute.Component<'contact.field-text', false>;
    last_name: Schema.Attribute.Component<'contact.field-text', false>;
    message: Schema.Attribute.Component<'contact.field-message', false>;
    subject: Schema.Attribute.Component<'contact.field-subject', false>;
  };
}

export interface ContactRules extends Struct.ComponentSchema {
  collectionName: 'components_contact_rules';
  info: {
    displayName: 'Rules';
  };
  attributes: {
    message: Schema.Attribute.String;
    minLength: Schema.Attribute.String;
    required: Schema.Attribute.String;
  };
}

export interface ContactTextBlock extends Struct.ComponentSchema {
  collectionName: 'components_contact_text_blocks';
  info: {
    displayName: 'Text Block';
  };
  attributes: {
    subtitle: Schema.Attribute.String;
    text: Schema.Attribute.Text;
  };
}

export interface LegalContact extends Struct.ComponentSchema {
  collectionName: 'components_legal_contacts';
  info: {
    displayName: 'Contact';
    icon: 'envelop';
  };
  attributes: {
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface LegalPhotos extends Struct.ComponentSchema {
  collectionName: 'components_legal_photos';
  info: {
    displayName: 'Photos';
  };
  attributes: {
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface LegalWebdesign extends Struct.ComponentSchema {
  collectionName: 'components_legal_webdesigns';
  info: {
    displayName: 'Webdesign';
  };
  attributes: {
    href: Schema.Attribute.String;
    link: Schema.Attribute.String;
    text: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface MediaVideo extends Struct.ComponentSchema {
  collectionName: 'components_media_video';
  info: {
    displayName: 'Video';
  };
  attributes: {
    bottom: Schema.Attribute.String;
    episode: Schema.Attribute.String;
    show: Schema.Attribute.String;
    src: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String;
  };
}

export interface SeoMetadata extends Struct.ComponentSchema {
  collectionName: 'components_seo_metadata';
  info: {
    displayName: 'Metadata';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.String;
    siteName: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_button';
  info: {
    displayName: 'Button';
  };
  attributes: {
    href: Schema.Attribute.String & Schema.Attribute.Required;
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedImageRef extends Struct.ComponentSchema {
  collectionName: 'components_shared_image_refs';
  info: {
    displayName: 'Image-ref';
  };
  attributes: {
    alt: Schema.Attribute.String;
    href: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_link';
  info: {
    displayName: 'Link';
  };
  attributes: {
    href: Schema.Attribute.String;
    state: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedTag extends Struct.ComponentSchema {
  collectionName: 'components_shared_tags';
  info: {
    displayName: 'Tag';
  };
  attributes: {
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface StoriesArticle extends Struct.ComponentSchema {
  collectionName: 'components_stories_articles';
  info: {
    displayName: 'Article';
  };
  attributes: {
    abstract: Schema.Attribute.Text;
    image: Schema.Attribute.Component<'shared.image-ref', false>;
    length: Schema.Attribute.String;
    link: Schema.Attribute.Component<'shared.link', false>;
    tag_title: Schema.Attribute.String;
    tags: Schema.Attribute.Component<'shared.tag', true>;
    title: Schema.Attribute.String;
  };
}

export interface StoriesBanner extends Struct.ComponentSchema {
  collectionName: 'components_stories_banners';
  info: {
    displayName: 'Banner';
  };
  attributes: {
    link: Schema.Attribute.Component<'shared.link', false>;
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface StoriesCategory extends Struct.ComponentSchema {
  collectionName: 'components_stories_categories';
  info: {
    displayName: 'Category';
  };
  attributes: {
    articles: Schema.Attribute.Component<'stories.article', true> &
      Schema.Attribute.Required;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface TeamMember extends Struct.ComponentSchema {
  collectionName: 'components_team_member';
  info: {
    displayName: 'Team Member';
  };
  attributes: {
    cv: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<'images'>;
    linkedin: Schema.Attribute.Component<'shared.link', false>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    position: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about.media': AboutMedia;
      'about.team': AboutTeam;
      'contact.field-email': ContactFieldEmail;
      'contact.field-message': ContactFieldMessage;
      'contact.field-subject': ContactFieldSubject;
      'contact.field-text': ContactFieldText;
      'contact.form': ContactForm;
      'contact.rules': ContactRules;
      'contact.text-block': ContactTextBlock;
      'legal.contact': LegalContact;
      'legal.photos': LegalPhotos;
      'legal.webdesign': LegalWebdesign;
      'media.video': MediaVideo;
      'seo.metadata': SeoMetadata;
      'shared.button': SharedButton;
      'shared.image-ref': SharedImageRef;
      'shared.link': SharedLink;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.tag': SharedTag;
      'stories.article': StoriesArticle;
      'stories.banner': StoriesBanner;
      'stories.category': StoriesCategory;
      'team.member': TeamMember;
    }
  }
}
