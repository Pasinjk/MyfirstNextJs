"use client"
import React from 'react';
import { Button, Flex } from 'antd';
import Link from 'next/link';


export default function Page(){

  return(
    <main className='DetailPage'>
      <div style={{background:"lightgrey"}}>
        <h1 style={{textAlign:"center"}}>
          Welcome to my Page
        </h1>
      </div>
      <footer style={{padding:'2rem', textAlign:"center"}}>
        <Button>
          <Link href="/login">
          Back to Login
          </Link>
        </Button>
        </footer>
    </main>
  );
}