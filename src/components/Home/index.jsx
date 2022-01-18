import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// antd
import { Skeleton, Switch, Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
const { Meta } = Card;

function Home() {
  const [words, setWord] = useState([]);
  const { loading } = useState({ loading: false });
  const onChange = checked => {
    this.setState({ loading: !checked });
    console.log(this.state.loading);
  };
  useEffect(() => {
    axios.get('http://localhost:3000/words').then(res => {
      // console.log(res.data);
      setWord(res.data);
    }).catch(err => {
      console.log(err);
    });
  },[]);

  return (
    <div>
      HOme
      <nav>
        <Link to="/about" >ABOUT</Link>
      </nav>
      <Switch checked={!loading} onChange={onChange} />
      {
        words.map((words) => {
          return (
            <div>
              {/* <ul>
                <li key={words.id}>{words.word}--{words.translate}</li>
              </ul> */}
              <Card
                style={{ width: 360, marginTop: 16 }}
                actions={[
                  <SettingOutlined key="setting" />,
                  <EditOutlined key="edit" />,
                  <EllipsisOutlined key="ellipsis" />,
                ]}
              >
                <Skeleton loading={loading} avatar active>
                  <Meta
                    // avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                    title={words.word}
                    description={words.translate}
                  />
                </Skeleton>
              </Card>
            </div>
          )
        })
      }
    </div>
  )
}

export default Home