"use client"

import { MyCustomButton } from '@/components/ui/CustomButton'
import { Button } from '@heroui/react'
import { Search01Icon } from 'hugeicons-react'

const HomePage = () => {

  const handleClick = () => {
    console.log("click me on start")
  }

  const handleClick2 = () => {
    console.log("click me on press")

  }

  return (
    <section className='py-10'>
      <div className='container mx-auto'>
        <h1 className='text-5xl font-medium'>Home page</h1>
        <div className='mt-5'>

          <div className='pt-10'>
            <h2 className='text-4xl'>icon buttons</h2>
            <div className="flex gap-4 pt-5">
              <Button onPressStart={handleClick} onPress={handleClick2} size='lg' isIconOnly><Search01Icon size={20} /></Button>

              <MyCustomButton style="primary" size='lg' isIconOnly className={"p-0"}><Search01Icon size={20} /></MyCustomButton>
              <MyCustomButton isLoading style="primary" size='lg' isIconOnly className={"p-0"}><Search01Icon size={20} /></MyCustomButton>
            </div>
          </div>

          <div className='pt-10'>
            <h2 className='text-4xl'>Custom button primary</h2>
            <div className="flex gap-4 pt-5">
              <MyCustomButton isLoading customSize={"xl"} style="primary">Button primary</MyCustomButton>
              <MyCustomButton customSize={"xl"} style="primary">Button primary</MyCustomButton>
              <MyCustomButton customSize={"lg"} style="primary">Button primary</MyCustomButton>
              <MyCustomButton customSize={"md"} style="primary">Button primary</MyCustomButton>
              <MyCustomButton customSize={"sm"} style="primary">Button primary</MyCustomButton>
              <MyCustomButton customSize={"xs"} style="primary">Button danger</MyCustomButton>
            </div>
          </div>

          <div className='pt-10'>
            <h2 className='text-4xl'>Custom button danger</h2>
            <div className="flex gap-4 pt-5">
              <MyCustomButton customSize={"xl"} style="danger">Button danger</MyCustomButton>
              <MyCustomButton customSize={"lg"} style="danger">Button danger</MyCustomButton>
              <MyCustomButton customSize={"md"} style="danger">Button danger</MyCustomButton>
              <MyCustomButton customSize={"sm"} style="danger">Button danger</MyCustomButton>
              <MyCustomButton customSize={"xs"} style="danger">Button danger</MyCustomButton>
            </div>
          </div>


        </div>
      </div>
    </section>
  )
}

export default HomePage