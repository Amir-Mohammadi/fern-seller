import React from 'react';
import Icons, { IconTypes } from '../icons';
import styles from './table.module.scss';

export type TableRow = {
  type: 'orderItem' | 'string';
  data: { img?: string; title?: string };
};
interface Props {
  rows?: TableRow[][];
  headers: string[];
  icon?: { icon: IconTypes; action?: Function; size?: string }[];
}
export type TableProps = Props;

const Table: React.FC<TableProps> = (props) => {
  return (
    <div className={styles.tblResponsive}>
      <table>
        <thead>
          <tr>
            {props.headers.map((title, index) => (
              <th key={index}>{title}</th>
            ))}
            {props.icon?.length ? <th>عملیات</th> : null}
          </tr>
        </thead>
        <tbody>
          {props.rows?.map((row, index) => (
            <tr key={index}>
              <td>{row[index] ? index + 1 : ''}</td>
              {row.map((field, i) => (
                <td key={i}>
                  {field.type == 'string' ? (
                    field.data.title
                  ) : (
                    <div>
                      <img src={field.data.img} />
                      <span>{field.data.title}</span>
                    </div>
                  )}
                </td>
              ))}

              <td>
                {row[index]
                  ? props.icon?.map((icon, i) => <Icons key={i} type={icon.icon} color="#aaaaaa" size={icon.size} />)
                  : ''}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
