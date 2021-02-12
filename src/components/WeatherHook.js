import React, { useEffect, useState } from 'react'

const url =
  'http://api.openweathermap.org/data/2.5/weather?q=stockholm,se&APPID=f8384513fad5f91ea04d07a2cbf916ec&units=metric'

function WeatherHook() {
  const [data, setData] = useState({ data: null })

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setData({ data: json }))
  }, [])

  return (
    <span>
      Känns som {!data.data ? '?' : data.data.main.feels_like.toFixed(1)}°C i
      Stockholm just nu.
    </span>
  )
}

export default WeatherHook
