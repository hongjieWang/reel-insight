import React, { useEffect, useState } from "react";
import { Card, Col, Row, Statistic, Table, Tag } from "antd";
import {
  ArrowUpOutlined,
  VideoCameraOutlined,
  UserOutlined,
  FileTextOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";
import ReactECharts from "echarts-for-react";
import { getDashboardStats } from "../../services/dashboard";
import type { DashboardStats } from "../../services/dashboard";

// --- 模拟数据 (实际应从 API 获取) ---
const lineChartOption = {
  title: { text: "近7日短剧热度趋势" },
  tooltip: { trigger: "axis" },
  grid: { left: "3%", right: "4%", bottom: "3%", containLabel: true },
  xAxis: {
    type: "category",
    data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
  },
  yAxis: { type: "value" },
  series: [
    {
      name: "播放量",
      type: "line",
      smooth: true,
      data: [120, 132, 101, 134, 90, 230, 210],
      itemStyle: { color: "#1890ff" },
    },
    {
      name: "AI生成量",
      type: "line",
      smooth: true,
      data: [22, 18, 19, 23, 29, 33, 31],
      itemStyle: { color: "#52c41a" },
    },
  ],
};

const pieChartOption = {
  title: { text: "短剧题材分布", left: "center" },
  tooltip: { trigger: "item" },
  series: [
    {
      name: "题材",
      type: "pie",
      radius: "50%",
      data: [
        { value: 1048, name: "霸道总裁" },
        { value: 735, name: "悬疑推理" },
        { value: 580, name: "古装言情" },
        { value: 484, name: "都市生活" },
        { value: 300, name: "科幻" },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)",
        },
      },
    },
  ],
};

const recentScripts = [
  {
    key: "1",
    title: "重生之我是AI大亨",
    category: "科幻",
    status: "已完结",
    views: "12W",
  },
  {
    key: "2",
    title: "只有我在的地球",
    category: "悬疑",
    status: "连载中",
    views: "8.5W",
  },
  {
    key: "3",
    title: "办公室的秘密",
    category: "都市",
    status: "审核中",
    views: "-",
  },
];

const columns = [
  { title: "剧名", dataIndex: "title", key: "title" },
  {
    title: "题材",
    dataIndex: "category",
    key: "category",
    render: (text: string) => <Tag color="blue">{text}</Tag>,
  },
  {
    title: "状态",
    dataIndex: "status",
    key: "status",
    render: (status: string) => {
      let color =
        status === "已完结"
          ? "green"
          : status === "连载中"
          ? "processing"
          : "warning";
      return <Tag color={color}>{status}</Tag>;
    },
  },
  { title: "播放量", dataIndex: "views", key: "views" },
];

// --- 组件主体 ---
const Dashboard: React.FC = () => {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 获取统计数据
    getDashboardStats().then((data) => {
      setStats(data);
      setLoading(false);
    });
  }, []);

  return (
    <div style={{ padding: "24px", background: "#f5f5f5", minHeight: "100%" }}>
      {/* 1. 顶部统计卡片 */}
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} lg={6}>
          <Card loading={loading} variant="plain">
            <Statistic
              title="总剧本数"
              value={stats?.totalScripts}
              prefix={<FileTextOutlined />}
              styles={{ content: { value: { color: "#3f8600" } } }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card loading={loading} variant="plain">
            <Statistic
              title="AI 生成数"
              value={stats?.aiGenerated}
              prefix={<ThunderboltOutlined />}
              styles={{ content: { value: { color: "#cf1322" } } }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card loading={loading} variant="plain">
            <Statistic
              title="总播放量"
              value={stats?.totalViews}
              prefix={<VideoCameraOutlined />}
              suffix="+"
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card loading={loading} variant="plain">
            <Statistic
              title="活跃用户"
              value={stats?.activeUsers}
              prefix={<UserOutlined />}
              formatter={(value: React.ReactNode) => (
                <span style={{ color: "#1890ff" }}>
                  {value} <ArrowUpOutlined style={{ fontSize: 12 }} />
                </span>
              )}
            />
          </Card>
        </Col>
      </Row>

      {/* 2. 中间图表区域 */}
      <Row gutter={[16, 16]} style={{ marginTop: "24px" }}>
        <Col xs={24} lg={16}>
          <Card title="数据趋势" bordered={false}>
            <ReactECharts option={lineChartOption} style={{ height: 350 }} />
          </Card>
        </Col>
        <Col xs={24} lg={8}>
          <Card title="题材分布" bordered={false}>
            <ReactECharts option={pieChartOption} style={{ height: 350 }} />
          </Card>
        </Col>
      </Row>

      {/* 3. 底部表格区域 */}
      <Row style={{ marginTop: "24px" }}>
        <Col span={24}>
          <Card title="最近生成的短剧" bordered={false}>
            <Table
              dataSource={recentScripts}
              columns={columns}
              pagination={false}
              size="middle"
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
