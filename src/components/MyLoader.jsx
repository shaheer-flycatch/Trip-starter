import { Card } from 'antd'
import React from 'react'
const  MyLoader=()=> {
  return (
    <div>
      <Card style={{ width: 400, height: 245 }} loading={true}></Card>
    </div>
  )
}

export {MyLoader} ;
