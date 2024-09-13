// schemas/portfolioSection.js
export default {
  name: 'portfolioSection',
  type: 'document',
  title: 'Portfolio Section',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'reelUrls',
      title: 'Video Reels',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'type',
              title: 'Video Type',
              type: 'string',
              options: {
                list: [
                  { title: 'YouTube', value: 'youtube' },
                  { title: 'Vimeo', value: 'vimeo' },
                  { title: 'File', value: 'file' }
                ]
              }
            },
            {
              name: 'url',
              title: 'Video URL',
              type: 'url',
              description: 'Link to the video or video file URL'
            }
          ]
        }
      ]
    },    
    {
      name: 'images',
      type: 'array',
      title: 'Images',
      of: [
        {
          type: 'object',
          title: 'Image with Text',
          fields: [
            {
              name: 'src',
              type: 'image',
              title: 'Image Source',
              options: {
                hotspot: true,
              },
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'alt',
              type: 'string',
              title: 'Alt Text',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'text',
              type: 'string',
              title: 'Text Overlay',
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    },
    {
      name: 'sectionStyle',
      type: 'string',
      title: 'Section Style (Optional)',
      description: 'CSS class to style the section (optional)',
    },
    {
      name: 'id',
      type: 'string',
      title: 'Section ID',
      description: 'Unique ID for this section',
      validation: (Rule) => Rule.required(),
    },
  ],
};
