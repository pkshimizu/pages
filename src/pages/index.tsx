import Head from 'next/head'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {FlexColumn, FlexRow} from "@/components/Flex";
import Label from "@/components/Label";
import Image from "next/image";


export default function Home() {
  return (
    <>
      <Head>
        <title>将棋レイク</title>
        <meta name="description" content="観る将のための情報収集アプリ" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <FlexColumn>
          <FlexRow width={"100wh"} height={256} justify={"center"} align={"center"}>
            <Image src={"/logo.png"} alt={"logo"} width={766} height={185} />
          </FlexRow>
          <FlexRow justify={"center"}>
            <FlexRow justify={"space-around"} width={960}>
              <Label text={"機能1"} />
              <Label text={"機能2"} />
              <Label text={"機能3"} />
            </FlexRow>
          </FlexRow>
          <FlexRow justify={"center"}>
            <Label text={"ダウンロード"} />
          </FlexRow>
          <FlexColumn>
            <FlexRow justify={"center"}>
              <Label text={"お問い合わせ"} />
            </FlexRow>
            <FlexRow justify={"center"}>
              <Label text={"GitHub"} />
              <Label text={"Mail"} />
            </FlexRow>
          </FlexColumn>
        </FlexColumn>
      </main>
    </>
  )
}
