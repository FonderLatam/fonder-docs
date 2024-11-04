import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Facturación Simplificada',
    Svg: require('@site/static/img/fonder/invoice-icon.svg').default,
    description: (
      <>
        Genera y gestiona facturas electrónicas de forma rápida y sencilla. 
        Cumple con los requisitos fiscales de tu país automáticamente.
      </>
    ),
  },
  {
    title: 'Pagos B2B',
    Svg: require('@site/static/img/fonder/payments-icon.svg').default,
    description: (
      <>
        Realiza y recibe pagos empresariales de forma segura. 
        Integración con los principales bancos de Latinoamérica.
      </>
    ),
  },
  {
    title: 'Gestión Financiera',
    Svg: require('@site/static/img/fonder/finance-icon.svg').default,
    description: (
      <>
        Controla tus finanzas con reportes en tiempo real, 
        conciliación automática y proyecciones de flujo de caja.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}