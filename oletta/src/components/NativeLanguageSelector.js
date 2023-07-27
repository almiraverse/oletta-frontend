import React from 'react'
import ReactCountryFlag from "react-country-flag"

export default function NativeLanguageSelector() {
  
  return (
    <div className='nativeLangPage'>
      <h1>SELECT YOUR NATIVE LANGUAGE</h1>

      <div className='flags'>

        <ReactCountryFlag
          countryCode="BH"
          svg
          style={{
            width: '2em',
            height: '2em',
            margin: '20px',

          }}
          title="Arabic (Khaleeji)"
        />

        <ReactCountryFlag
          countryCode="CA"
          svg
          style={{
            width: '2em',
            height: '2em',
            margin: '20px',
          }}
          title="English"
        />

        <ReactCountryFlag
          countryCode="CN"
          svg
          style={{
            width: '2em',
            height: '2em',
            margin: '20px',
          }}
          title="Mandarin"
        />

        <ReactCountryFlag
          countryCode="DE"
          svg
          style={{
            width: '2em',
            height: '2em',
            margin: '20px',
          }}
          title="German"
        />

        <ReactCountryFlag
          countryCode="EG"
          svg
          style={{
            width: '2em',
            height: '2em',
            margin: '20px',
          }}
          title="Arabic (Egyptian)"
        />

        <ReactCountryFlag
          countryCode="ES"
          svg
          style={{
            width: '2em',
            height: '2em',
            margin: '20px',
          }}
          title="Spanish"
        />

        <ReactCountryFlag
          countryCode="FR"
          svg
          style={{
            width: '2em',
            height: '2em',
            margin: '20px',
          }}
          title="French"
        />

        <ReactCountryFlag
          countryCode="GB"
          svg
          style={{
            width: '2em',
            height: '2em',
            margin: '20px',
          }}
          title="English (UK)"
        />

        <ReactCountryFlag
          countryCode="GR"
          svg
          style={{
            width: '2em',
            height: '2em',
            margin: '20px',
          }}
          title="Greek"
        />

        <ReactCountryFlag
          countryCode="ID"
          svg
          style={{
            width: '2em',
            height: '2em',
            margin: '20px',
          }}
          title="Indonesian"
        />

        <ReactCountryFlag
          countryCode="IT"
          svg
          style={{
            width: '2em',
            height: '2em',
            margin: '20px',
          }}
          title="Italian"
        />

        <ReactCountryFlag
          countryCode="KE"
          svg
          style={{
            width: '2em',
            height: '2em',
            margin: '20px',
          }}
          title="Swahili"
        />

        <ReactCountryFlag
          countryCode="KR"
          svg
          style={{
            width: '2em',
            height: '2em',
            margin: '20px',
          }}
          title="Korean"
        />

        <ReactCountryFlag
          countryCode="LK"
          svg
          style={{
            width: '2em',
            height: '2em',
            margin: '20px',
          }}
          title="Sinhala"
        />

        <ReactCountryFlag
          countryCode="NO"
          svg
          style={{
            width: '2em',
            height: '2em',
            margin: '20px',
          }}
          title="Norwegian"
        />

        <ReactCountryFlag
          countryCode="PH"
          svg
          style={{
            width: '2em',
            height: '2em',
            margin: '20px',
          }}
          title="Tagalog"
        />

        <ReactCountryFlag
          countryCode="PK"
          svg
          style={{
            width: '2em',
            height: '2em',
            margin: '20px',
          }}
          title="Urdu"
        />

        <ReactCountryFlag
          countryCode="RU"
          svg
          style={{
            width: '2em',
            height: '2em',
            margin: '20px',
          }}
          title="Russian"
        />

        <ReactCountryFlag
          countryCode="SE"
          svg
          style={{
            width: '2em',
            height: '2em',
            margin: '20px',
          }}
          title="Swedish"
        />

        <ReactCountryFlag
          countryCode="TR"
          svg
          style={{
            width: '2em',
            height: '2em',
            margin: '20px',
          }}
          title="Turkish"
        />

      </div>

    </div>
  )
}
