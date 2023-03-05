import Head from 'next/head'
import {FlexColumn, FlexRow} from "@/components/Flex";
import Label from "@/components/Label";
import Image from "next/image";
import Button from "@/components/Button";
import Link from "@/components/Link";
import {GitHub, MailOutline} from "@mui/icons-material";


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
            <Button label={"ダウンロード"} />
          </FlexRow>
          <FlexColumn>
            <FlexRow justify={"center"}>
              <Label text={"お問い合わせ"} />
            </FlexRow>
            <FlexRow justify={"center"}>
              <Link href={"https://github.com/pkshimizu"}>
                <FlexRow>
                  <GitHub/>
                  <Label text={"GitHub"} />
                </FlexRow>
              </Link>
              <Link href={"mailto:shimizu.kenji@noncore.net"}>
                <FlexRow>
                  <MailOutline/>
                  <Label text={"e-mail"} />
                </FlexRow>
              </Link>
            </FlexRow>
          </FlexColumn>
        </FlexColumn>
      </main>
    </>
  )
}
