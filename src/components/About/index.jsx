import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Skeleton, Switch, Card, Avatar  } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
const { Meta } = Card;

class About extends Component {
  state = {
    loading: false,
  };

  onChange = checked => {
    this.setState({ loading: !checked });
    console.log(this.state.loading);
  };

  render() {
    const { loading } = this.state;

    return (
      <>
        <Switch checked={!loading} onChange={this.onChange} />

        <Card style={{ width: 300, marginTop: 16 }} loading={loading}>
          <Meta
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
            title="Card title"
            description="This is the description"
          />
        </Card>

        <Card
          style={{ width: 300, marginTop: 16 }}
          actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
        >
          <Skeleton loading={loading} avatar active>
            <Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              // title={works.map(() => (works.id))}
              description="This is the description"
            />
          </Skeleton>
        </Card>
        <nav>
          <Link to="/home" >Home</Link>
        </nav>
      </>
    );
  }
}

export default About;