"use client"
import React from 'react';
import { Button, Flex } from 'antd';
import Link from 'next/link';


export default function Page(){

  return(
    <main className='DetailPage'>
      <div style={{background:"lightgrey"}}>
        <h1 style={{textAlign:"center"}}>
          Welcome to my page Detail
        </h1>
      </div>
      <footer style={{padding:'2rem', textAlign:"center"}}>
        <Button>
          <Link href="/user">
          Back page
          </Link>
        </Button>
        <Button style={{marginLeft:"10px"}}>
          <Link href="/">
          back homepage
          </Link>
        </Button>
        </footer>
    </main>
  );
}