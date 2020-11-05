import { Card } from 'antd'
import React from 'react'
function MyLoader() {
  return (
    <div>
      <Card style={{ width: 400, height: 245 }} loading={true}></Card>
    </div>
  )
}

export default MyLoader;
