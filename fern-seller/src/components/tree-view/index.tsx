import classnames from 'classnames';
import Icons, { IconTypes } from '../icons';
import styles from './tree-view.module.scss';

interface Props {
  nodes: TreeViewNodes[];
  toggleFolded: (index: number) => void;
  selectProductCategory: (toggleNode: TreeViewNodes) => void;
}

export type TreeViewNodes = {
  id: number;
  parentId?: number | null;
  title: string;
  children: TreeViewNodes[];
  folded: boolean;
  uri: string;
};

function renderNode(
  node: TreeViewNodes,
  selectProductCategory: (toggleNode: TreeViewNodes) => void,
  toggleFolded: (index: number) => void,
  key: number,
) {
  return (
    <div
      key={key}
      className={classnames({
        [styles.child]: node.children.length == 0,
        [styles.node]: true,
      })}>
      <button
        className={classnames({
          [styles.headerItem]: node.parentId == null,
          [styles.subHeaderItem]: node.parentId != null && node.children.length != 0,
          [styles.item]: node.parentId != null && node.children.length == 0,
          [styles.button]: true,
        })}
        onClick={() => selectProductCategory(node)}>
        {node.title}
      </button>

      <div className={styles.icon} onClick={() => toggleFolded(key)}>
        {node.children.length == 0 && node.parentId != null ? null : (
          <Icons size="12px" type={node.folded ? IconTypes.LeftSwipe : IconTypes.DownSwipe} color="#707070" />
        )}
      </div>
    </div>
  );
}

function creatTree(
  nodes: TreeViewNodes[],
  selectProductCategory: (toggleNode: TreeViewNodes) => void,
  toggleFolded: (index: number) => void,
) {
  return (
    <div className={styles.body}>
      <ul className={styles.list}>
        {nodes.map((node) => {
          if (node.children.length === 0) return renderNode(node, selectProductCategory, toggleFolded, node.id);

          return (
            <li key={node.id}>
              {renderNode(node, selectProductCategory, toggleFolded, node.id)}
              {node.folded ? null : creatTree(node.children, selectProductCategory, toggleFolded)}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export type TreeViewProps = Props;
const TreeView: React.FC<TreeViewProps> = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Icons type={IconTypes.Filter} size={'15px'} color="#707070" />
        <div className={styles.title}>دسته بندی کالا</div>
      </div>
      {creatTree(props.nodes, props.selectProductCategory, props.toggleFolded)}
    </div>
  );
};

export default TreeView;
