import classNames from 'classnames';
import Icons, { IconTypes } from '../icons';
import styles from './info.module.scss';

export enum Color {
  primary = '#24AFFF',
  danger = '#DB0060',
  warning = '#FF9124',
  success = '#009289',
  light = '#AAAAAA',
}

export enum textTypes {
  text,
  password,
}

interface Props {
  mode?: Color;
  title: string;
  items: { title: string; value: string; type?: textTypes; icon: IconTypes }[];
}

export type InfoProps = Props;

const Info: React.FC<InfoProps> = (props) => {
  return (
    <div className={styles.container}>
      <div
        className={classNames({
          [styles.alert]: true,
          [styles.gPrimary]: props.mode === Color.primary,
          [styles.gDanger]: props.mode === Color.danger,
          [styles.gSuccess]: props.mode === Color.success,
          [styles.gWarning]: props.mode === Color.warning,
        })}>
        <span>{props.title}</span>
      </div>
      <div className={styles.bottom}>
        <div className={styles.rightBX}>
          {props.items.map((value, i) =>
            i % 2 === 0 ? (
              <div className={styles.chart}>
                <div className={styles.title}>
                  <div className={styles.info}>{value.title}</div>
                  <div className={styles.value}>{value.value}</div>
                </div>
                <div className={styles.icon}>
                  <span>
                    <Icons type={IconTypes.Edit} size={'24'} color={'#d3d3d3'} />
                  </span>
                </div>
              </div>
            ) : null,
          )}
        </div>
        <div className={styles.rightBX}>
          {props.items.map((value, i) =>
            i % 2 === 0 ? null : (
              <div className={styles.chart}>
                <div className={styles.title}>
                  <div className={styles.info}>{value.title}</div>
                  <div className={styles.value}>{value.value}</div>
                </div>
                <div className={styles.icon}>
                  <span>
                    <Icons type={IconTypes.Edit} size={'24'} color={'#d3d3d3'} />
                  </span>
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
};

export default Info;
