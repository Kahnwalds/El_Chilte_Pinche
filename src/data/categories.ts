
import type { Category, CategorySlug } from '../types/category';

export const categories: Category[] = [
  {
    slug: 'bebidas',
    name: 'Bebidas',
    description:
      'Aguas frescas, atoles y refrescos del norte para acompañar el calor y la mesa.',
    image: {
      src: '/images/categories/bebidas.webp',
      alt: 'Vaso de agua fresca norteña con hielo y fruta',
      
    },
    filterTags: ['bebidas', 'frio', 'fruta', 'refrescante'],
  },
  {
    slug: 'platillo-fuerte',
    name: 'Platillo Fuerte',
    description:
      'Los platos contundentes de cada día: carne, huevo y guarniciones que llenan la mesa.',
    image: {
      src: '/images/categories/platillo-fuerte.webp',
      alt: 'Plato fuerte norteño servido con guarniciones',
      
    },
    filterTags: ['platillo-fuerte', 'carne', 'desayuno', 'comida'],
  },
  {
    slug: 'postres',
    name: 'Postres',
    description:
      'Dulces de rancho con cajeta, canela y piloncillo para cerrar la comida.',
    image: {
      src: '/images/categories/postres.webp',
      alt: 'Postre tradicional norteño con cajeta',
      
    },
    filterTags: ['postres', 'dulce', 'cajeta', 'harina'],
  },
  {
    slug: 'caldos',
    name: 'Caldos',
    description:
      'Caldos caseros de cuchara, reconfortantes y servidos bien calientes.',
    image: {
      src: '/images/categories/caldos.webp',
      alt: 'Tazón de caldo norteño humeante',
      
    },
    filterTags: ['caldos', 'de-cuchara', 'caliente', 'lacteo'],
  },
  {
    slug: 'cortes',
    name: 'Cortes',
    description:
      'Cortes de res al fuego y a la sartén: el sello de la cocina del asador.',
    image: {
      src: '/images/categories/cortes.webp',
      alt: 'Corte de res dorado sobre sartén de hierro',
      
    },
    filterTags: ['cortes', 'carne', 'res', 'asador'],
  },
  {
    slug: 'guisos',
    name: 'Guisos',
    description:
      'Carnes cocinadas despacio con chile, jitomate y especias hasta quedar tiernas.',
    image: {
      src: '/images/categories/guisos.webp',
      alt: 'Cazuela de guiso de carne con chile colorado',
      
    },
    filterTags: ['guisos', 'carne', 'chile', 'de-cuchara'],
  },
  {
    slug: 'mariscos',
    name: 'Mariscos',
    description:
      'Camarón y producto del mar del Golfo y el Pacífico, preparados a la norteña.',
    image: {
      src: '/images/categories/mariscos.webp',
      alt: 'Copa de cóctel de camarón con limón',
      
    },
    filterTags: ['mariscos', 'camaron', 'frio', 'limon'],
  },
  {
    slug: 'quesos',
    name: 'Quesos',
    description:
      'Quesos regionales fundidos, asados o en rebanadas: lácteos con carácter norteño.',
    image: {
      src: '/images/categories/quesos.webp',
      alt: 'Queso fundido con chile en cazuela',
      
    },
    filterTags: ['quesos', 'lacteo', 'chile', 'caliente'],
  },
  {
    slug: 'tortillas',
    name: 'Tortillas',
    description:
      'Tortillas de harina y sus rellenos: burros, chivichangas y coyotas.',
    image: {
      src: '/images/categories/tortillas.webp',
      alt: 'Tortillas de harina recién hechas',
      
    },
    filterTags: ['tortillas', 'harina', 'burro', 'antojito'],
  },
];

export const categoryMap: Record<CategorySlug, Category> = Object.fromEntries(
  categories.map((c) => [c.slug, c]),
) as Record<CategorySlug, Category>;

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}