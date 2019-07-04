import React from 'react';
import { Divider } from 'antd';
import { Toolbar } from 'gg-editor';
import ToolbarButton from './ToolbarButton';
import styles from './index.less';

const FlowToolbar = () => {
  return (
    <Toolbar className={styles.toolbar}>
      <ToolbarButton command="undo" text="取消" />
      <ToolbarButton command="redo" text="重做" />
      <Divider type="vertical" />
      <ToolbarButton command="copy" text="复制" />
      <ToolbarButton command="paste" text="粘贴" />
      <ToolbarButton command="delete" text="删除" />
      <Divider type="vertical" />
      <ToolbarButton command="zoomIn" icon="zoom-in" text="放大" />
      <ToolbarButton command="zoomOut" icon="zoom-out" text="缩小" />
      <ToolbarButton command="autoZoom" icon="fit-map" text="铺满视图" />
      <ToolbarButton command="resetZoom" icon="actual-size" text="还原视图尺寸" />
      <Divider type="vertical" />
      <ToolbarButton command="toBack" icon="to-back" text="靠后显示" />
      <ToolbarButton command="toFront" icon="to-front" text="靠前显示" />
      <Divider type="vertical" />
      <ToolbarButton command="multiSelect" icon="multi-select" text="多选" />
      <ToolbarButton command="addGroup" icon="group" text="添加分组" />
      <ToolbarButton command="unGroup" icon="ungroup" text="删除分组" />
        <button onClick={()=>{console.log('保存',this.flow.save())}}>保存</button>
    </Toolbar>
  );
};

export default FlowToolbar;
