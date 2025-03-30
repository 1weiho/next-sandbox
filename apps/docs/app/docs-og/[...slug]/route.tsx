import { generateOGImage } from 'fumadocs-ui/og';
import { metadataImage } from '../../../lib/metadata';

export const GET = metadataImage.createAPI((page) => {
  return generateOGImage({
    primaryTextColor: 'rgb(127, 187, 224)',
    title: page.data.title,
    description: page.data.description,
    site: 'Next Sandbox',
  });
});

export function generateStaticParams() {
  return metadataImage.generateParams();
}
