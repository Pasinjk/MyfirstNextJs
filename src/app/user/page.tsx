"use client"
import React from 'react';
import { Button, Flex } from 'antd';
import { textAlign } from 'html2canvas/dist/types/css/property-descriptors/text-align';
import Link from 'next/link';


export default function Page(){

  return(
    <main>
      <div style={{background:"lightgreen"}}>
        <h1 style={{textAlign:"center"}}>
          Hello User Welcome to my page
        </h1>
      </div>
      <footer style={{padding:"2rem" ,textAlign:"center"}}>
        <Button>
          <Link href="/">
          Back page
          </Link>
        </Button>
        <Button style={{marginLeft:"10px"}}type="primary">
          <Link href="/detail">
          Next Page
          </Link>
        </Button>
        </footer>
    </main>
  );
}