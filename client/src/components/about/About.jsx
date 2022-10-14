import React from 'react'
import { BoltIcon, ChatBubbleBottomCenterTextIcon, GlobeAltIcon, ScaleIcon } from '@heroicons/react/24/outline'


const features = [
  {
    name: 'Competitive exchange rates',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: GlobeAltIcon,
  },
  {
    name: 'No hidden fees',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: ScaleIcon,
  },
  {
    name: 'Transfers are instant',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: BoltIcon,
  },
  {
    name: 'Mobile notifications',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: ChatBubbleBottomCenterTextIcon,
  },
]
const str = "THE PURPOSE OF THE CHARITY IS THROUGHOUT THE WORLD AND   MORE   PARTICULARLY   IN   THE   ROYAL   BOROUGH   OF GREENWICH   AND   IN   THE   UNITED   KINGDOM   THE ADVANCEMENT OF THE FAITH AND RELIGIOUS PRACTICES OF ISLAM  IN  ACCORDANCE  WITH  THE  QUR’AN  AND  THE  SUNNAH AMONGST   MUSLIMS   IN   PARTICULAR   AND   MEMBERS   OF   THE PUBLIC IN GENERAL THROUGH THE PROVISION OF A MOSQUE AND   INCLUDING   THE   FOLLOWING   ACTIVITIES:   (A)   EDUCATING THE PUBLIC IN THE TEACHINGS AND PRACTICES OF ISLAM; (B) PROVIDING RECREATIONAL FACILITIES AND ACTIVITIES IN THE INTERESTS   OF   SOCIAL   WELFARE   WITH   THE   OBJECT   OF IMPROVING   THE   CONDITIONS   OF   LIFE   FOR   THOSE   PERSONS IN NEED OF SUCH FACILITIES AND ACTIVITIES;  (C) RELIEVING THOSE IN NEED DUE TO POVERTY, SICKNESS AND SUFFERING IRRESPECTIVE OF THEIR NATIONALITY, RACE, ETHNIC ORIGIN AND   RELIGIOUS   BELIEFS;   (D)   PROMOTING   RACIAL   AND RELIGIOUS   HARMONY;   AND;   (E)   WORKING   TOWARDS   THE ELIMINATION   OF   DISCRIMINATION   ON   THE   GROUNDS   OF RELIGION AND RACE."
const str2 = str.toLocaleLowerCase();

export default function Example() {
  return (
    <div className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
            CHARLTON MASJID TRUST
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">

 {str2}
          </p>
        </div>

        <b>What the charity does:</b>

          <li>General Charitable Purposes</li>
          <li>Education/training</li>
          <li>Disability</li>
          <li>The Prevention Or Relief Of Poverty</li>
          <li>Religious Activities</li>
          <li>Human Rights/religious Or Racial Harmony/equality Or Diversity</li>
        

        <b>Who the charity helps:</b>

        <li>Children/young People</li>
        <li>Elderly/old People</li>
        <li>Other Defined Groups</li>
        <li>The General Public/mankind</li>
        

        <b>How the charity helps:</b>

        <li>Provides Buildings/facilities/open Space</li>
        <li>Provides Services</li>
        <li>Provides Advocacy/advice/information</li>


        <b>Where the charity operates:</b>
        <li>Greenwich</li>
        <li>Lewisham</li>


{/*         <div className="mt-10">
          <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg font-medium leading-6 text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div> */}
      </div>
    </div>
  )
}
