import Link from 'next/link';
import styles from '../styles/Home.module.css';

const products = [
  { id: 1, name: 'Rainbow Quilt Pattern', price: '$10' },
  { id: 2, name: 'Handmade Pincushion', price: '$15' },
  { id: 3, name: 'Vintage Button Set', price: '$8' },
];

const posts = [
  { id: 1, title: 'How to Sew a Dress', href: '#' },
  { id: 2, title: 'Choosing the Right Fabric', href: '#' },
  { id: 3, title: 'Top 5 Beginner Tips', href: '#' },
];

export default function Home() {
  return (
    <div>
      <section className={styles.hero}>
        <img
          src="https://via.placeholder.com/1600x900"
          alt=""
          className={styles.heroImage}
        />
        <div className={styles.heroContent}>
          <h1>Magical Sewing Patterns &amp; Handmade Crafts</h1>
          <Link href="/shop" legacyBehavior>
            <a className={styles.ctaButton}>Shop Now</a>
          </Link>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Featured Products</h2>
        <div className={styles.productsGrid}>
          {products.map((product) => (
            <div key={product.id} className={styles.productCard}>
              <img
                src="https://via.placeholder.com/300"
                alt=""
                className={styles.productImage}
              />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2>Latest from the Blog</h2>
        <ul className={styles.blogList}>
          {posts.map((post) => (
            <li key={post.id} className={styles.blogItem}>
              <Link href={post.href} legacyBehavior>
                <a>{post.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
