import React from "react";
import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import "./main.css"

const TransactionsPage = ({ debts }) => {
  const [key, setKey] = useState('home');
  return (
    <section className="schedule">
      <div className="container">
      <h1 className="text-white">Dars jadvali 12-M (2023-2024)</h1>
      <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="home" title="1-chorak">
      <table class="myTimetable">
          <thead>
            <tr>
              <th></th>
              <th>Dushanba</th>
              <th>Seshanba</th>
              <th>Chorchanba</th>
              <th>Payshanba</th>
              <th>Juma</th>
              <th>Shanba</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1-soat</td>
              <td>
                <div class="subject">Matematika</div>
                <div class="room">A120</div>
              </td>
              <td>
                <div class="subject">Adabiyot</div>
                <div class="room">C1</div>
              </td>
              <td>
                <div class="subject">Ingliz tili</div>
                <div class="room">B21</div>
              </td>
              <td>
                <div class="subject">Matematika</div>
                <div class="room">A120</div>
              </td>
              <td>
                <div class="subject">Geografiya</div>
                <div class="room">B101</div>
              </td>
              <td>
                <div class="subject">Matematika</div>
                <div class="room">A120</div>
              </td>
            </tr>
            <tr>
              <td>2-soat</td>
              <td>
                <div class="subject">Kimyo</div>
                <div class="room">Lab1</div>
              </td>
              <td>
                <div class="subject">Tarix</div>
                <div class="room">B104</div>
              </td>
              <td>
                <div class="subject">Ingliz tili</div>
                <div class="room">C17</div>
              </td>
              <td>
                <div class="subject">Jismoniy tarbiya</div>
                <div class="room">A Gym</div>
              </td>
              <td>
                <div class="subject">Matematika</div>
                <div class="room">A120</div>
              </td>
              <td>
                <div class="subject">Kimyo</div>
                <div class="room">Lab1</div>
              </td>
            </tr>
            <tr>
              <td colspan="7" class="break">
                Tanaffuz
              </td>
            </tr>
            <tr>
              <td>3-soat</td>
              <td>
                <div class="subject">Informatika</div>
                <div class="room">ICT 1</div>
              </td>
              <td>
                <div class="subject">Ingliz tili</div>
                <div class="room">B21</div>
              </td>
              <td>
                <div class="subject">Musiqa</div>
                <div class="room">C5</div>
              </td>
              <td>
                <div class="subject">Ingliz tili</div>
                <div class="room">B21</div>
              </td>
              <td>
                <div class="subject">Tarix</div>
                <div class="room">A24</div>
              </td>
              <td>
                <div class="subject">Ingliz tili</div>
                <div class="room">C17</div>
              </td>
            </tr>
            <tr>
              <td colspan="7" class="lunch">
                Tushlik
              </td>
            </tr>
            <tr>
              <td>4-soat</td>
              <td>
                <div class="subject">Tarix</div>
                <div class="room">B104</div>
              </td>
              <td>
                <div class="subject">Matematika</div>
                <div class="room">C17</div>
              </td>
              <td>
                <div class="subject">Matematika</div>
                <div class="room">A120</div>
              </td>
              <td>
                <div class="subject">Geografiya</div>
                <div class="room">B101</div>
              </td>
              <td>
                <div class="subject">Jismoniy tarbiya</div>
                <div class="room">A Gym</div>
              </td>
              <td>
                <div class="subject">Informatika</div>
                <div class="room">ICT 1</div>
              </td>
            </tr>
            <tr>
              <td>5-soat</td>
              <td>
                <div class="subject">Ingliz tili</div>
                <div class="room">C17</div>
              </td>
              <td>
                <div class="subject">Kimyo</div>
                <div class="room">Lab1</div>
              </td>
              <td>
                <div class="subject">Ingliz tili</div>
                <div class="room">B21</div>
              </td>
              <td>
                <div class="subject">Kimyo</div>
                <div class="room">Lab1</div>
              </td>
              <td>
                <div class="subject">Qo'shimcha dars</div>
                <div class="room">B18</div>
              </td>
              <td>
                <div class="subject">Geografiya</div>
                <div class="room">B101</div>
              </td>
            </tr>
          </tbody>
        </table>
      </Tab>
      <Tab eventKey="profile" title="2-chorak">
      <table class="myTimetable">
          <thead>
            <tr>
              <th></th>
              <th>Dushanba</th>
              <th>Seshanba</th>
              <th>Chorchanba</th>
              <th>Payshanba</th>
              <th>Juma</th>
              <th>Shanba</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1-soat</td>
              <td>
                <div class="subject">Tarix</div>
                <div class="room">B104</div>
              </td>
              <td>
                <div class="subject">Matematika</div>
                <div class="room">C17</div>
              </td>
              <td>
                <div class="subject">Matematika</div>
                <div class="room">A120</div>
              </td>
              <td>
                <div class="subject">Geografiya</div>
                <div class="room">B101</div>
              </td>
              <td>
                <div class="subject">Jismoniy tarbiya</div>
                <div class="room">A Gym</div>
              </td>
              <td>
                <div class="subject">Informatika</div>
                <div class="room">ICT 1</div>
              </td>
            </tr>
            <tr>
              <td>2-soat</td>
              <td>
                <div class="subject">Ingliz tili</div>
                <div class="room">C17</div>
              </td>
              <td>
                <div class="subject">Kimyo</div>
                <div class="room">Lab1</div>
              </td>
              <td>
                <div class="subject">Ingliz tili</div>
                <div class="room">B21</div>
              </td>
              <td>
                <div class="subject">Kimyo</div>
                <div class="room">Lab1</div>
              </td>
              <td>
                <div class="subject">Qo'shimcha dars</div>
                <div class="room">B18</div>
              </td>
              <td>
                <div class="subject">Geografiya</div>
                <div class="room">B101</div>
              </td>
            </tr>
            <tr>
              <td colspan="7" class="break">
                Tanaffuz
              </td>
            </tr>
            <tr>
              <td>3-soat</td>
              <td>
                <div class="subject">Informatika</div>
                <div class="room">ICT 1</div>
              </td>
              <td>
                <div class="subject">Ingliz tili</div>
                <div class="room">B21</div>
              </td>
              <td>
                <div class="subject">Musiqa</div>
                <div class="room">C5</div>
              </td>
              <td>
                <div class="subject">Ingliz tili</div>
                <div class="room">B21</div>
              </td>
              <td>
                <div class="subject">Tarix</div>
                <div class="room">A24</div>
              </td>
              <td>
                <div class="subject">Ingliz tili</div>
                <div class="room">C17</div>
              </td>
            </tr>
            <tr>
              <td colspan="7" class="lunch">
                Tushlik
              </td>
            </tr>
            <tr>
              <td>4-soat</td>
              <td>
                <div class="subject">Matematika</div>
                <div class="room">A120</div>
              </td>
              <td>
                <div class="subject">Adabiyot</div>
                <div class="room">C1</div>
              </td>
              <td>
                <div class="subject">Ingliz tili</div>
                <div class="room">B21</div>
              </td>
              <td>
                <div class="subject">Matematika</div>
                <div class="room">A120</div>
              </td>
              <td>
                <div class="subject">Geografiya</div>
                <div class="room">B101</div>
              </td>
              <td>
                <div class="subject">Matematika</div>
                <div class="room">A120</div>
              </td>
            </tr>
            <tr>
              <td>5-soat</td>
              <td>
                <div class="subject">Kimyo</div>
                <div class="room">Lab1</div>
              </td>
              <td>
                <div class="subject">Tarix</div>
                <div class="room">B104</div>
              </td>
              <td>
                <div class="subject">Ingliz tili</div>
                <div class="room">C17</div>
              </td>
              <td>
                <div class="subject">Jismoniy tarbiya</div>
                <div class="room">A Gym</div>
              </td>
              <td>
                <div class="subject">Matematika</div>
                <div class="room">A120</div>
              </td>
              <td>
                <div class="subject">Kimyo</div>
                <div class="room">Lab1</div>
              </td>
            </tr>
          </tbody>
        </table>
      </Tab>
      <Tab eventKey="contact" title="3-chorak">
        3-chorak uchun dars jadvali mavjud emas
      </Tab>
      <Tab eventKey="" title="4-chorak">
      4-chorak uchun dars jadvali mavjud emas
      </Tab>
    </Tabs>
        
       
      </div>
    </section>
  );
};

export default TransactionsPage;
