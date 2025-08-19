import React from 'react';
// 若需要更复杂的样式管理，可替换为 styled-components 等方案
import './css/Resume.css'; 

/**
 * 教育经历组件
 * @param {Object} props - 教育经历数据
 * @param {string} props.period - 时间区间
 * @param {string} props.school - 学校信息
 * @param {string} props.major - 专业
 * @param {string} props.description - 描述内容
 */
const Education = ({ period, school, major, description }) => (
  <section className="resume-section">
    <h3>教育经历</h3>
    <div className="section-content">
      <p className="period">{period}</p>
      <p className="subtitle">{`${school} - ${major}`}</p>
      <p className="description">{description}</p>
    </div>
  </section>
);

/**
 * 工作经历列表项组件
 * @param {Object} props - 单条工作经历数据
 * @param {string} props.period - 时间区间
 * @param {string} props.company - 公司信息
 * @param {string} props.title - 职位
 * @param {string[]} props.details - 工作内容详情
 */
const WorkItem = ({ period, company, title, details }) => (
  <div className="work-item">
    <p className="period">{period}</p>
    <h4 className="position">{`${company} - ${title}`}</h4>
    <ul className="details-list">
      {details.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

/**
 * 工作经历容器组件
 */
const WorkExperience = () => {
  // 模拟数据，实际可从接口获取
  const workData = [
    {
      period: '2016.06-至今',
      company: '重庆诺怀软件有限公司 - 开发三部',
      title: '开发工程师',
      details: [
        '负责公司电商项目的开发，主要使用.net MVC, html, css, javascript, JQuery等技术，还在线的有：',
        '嘉岩供应IMRO项目（https://www.verymro.com/ ）；项目需要同步网易严选数据，对接API将数据同步到本系统中；优化产品检索和性能，对Elastic search数据库并保持搜索正确性和数据库的一致性等；',
        'Try on Glasses（https://www.ilookglasses.ca/ ）；加拿大售卖眼镜的网站；项目主要功能是虚拟化戴眼镜，并根据用户的度数匹配镜片；集成webcamera中用于拍摄人像，集成识别瞳孔的js作用于识别图片上的瞳孔等。',
        'BiCaoYuan项目（https://bicaoyuan.store/ ）；墨西哥买化妆品的平台；项目开发了网页端和手机端，我主要负责网页端和手机API的开发；对接墨西哥的支付平台；处理项目技术问题等。',
        'Todd客户的各个电商项目，卖平光和度数。',
        '雷蛇直播打赏项目的负责雷蛇客户的直播打赏项目，主要使用react搭建前端，nodejs(express.js) + mysql搭建后端；项目主要是对接各大主要支付平台，以及雷蛇自己的支付平台，对接youtube, twitch, facebook等平台的直播API，如果有人订阅打赏后需要显示对应的自定义文字、图片，后台管理主要开发系统报表；负责node.js的后端项目搭建，部分开发工作；code review等。',
        'QMS风险管项目，项目是解决一些制造商的风险评估和管理，这个项目耦合性极高，几乎每个功能都跟其他地方有耦合，在项目中，主要负责后端业务代码的开发和部分前端react开发，期间解决部分性能问题。',
        '负责新加坡客户Nemo项目后端开发，融资网站。后端使用node.js开发，期间主要开发从csv写入和处理数据到数据库中，以及部分数据报表的开发和解决部分性能问题（这个客户主要是sql语句性能不佳）。',
        '负责华宇客户内部管理项目后端开发和前端部分开发工作，报价等，技术主要使用java和react前端开发，我参与的项目中，主要是负责前端开发工作。',
        '出差博腾内部管理系统开发，出差成都驻场开发（时间较短）。',
        '项目经理工作：',
        '工作内容主要是前期负责项目需求对接，明细项目需求，拆分需求点，根据需求点按照公司规定给客户一个大致报价；中后期持续跟进项目进度，同客户持续沟通项目需求的变化、改进等；按需分配内部开发人员的工作任务，持续跟进开发进度等。从雷蛇直播打赏项目开始，持续在公司负责沟通部分项目的报价，开发和管理等工作。',
        '期间有雷蛇打赏项目，Try on Glasses 项目，新加坡客户Nemo项目，华宇集团内部管理系统部分项目，带团队出差博腾、成都等驻场开发。Todd的各个电商项目报价等。',
        'Try on Glasses 项目和新加坡客户Nemo项目，负责沟通项目需求和拆分，理清客户需求，分配项目任务，解决部分技术问题等。'
      ]
    }
  ];

  return (
    <section className="resume-section">
      <h3>工作经历</h3>
      <div className="section-content">
        {workData.map((item, index) => (
          <WorkItem 
            key={index} 
            period={item.period} 
            company={item.company} 
            title={item.title} 
            details={item.details} 
          />
        ))}
      </div>
    </section>
  );
};

/**
 * 简历主组件
 */
const Resume = () => {
  return (
    <div className="resume-container">
      <Education 
        period="2012.09-2016.06"
        school="重庆交通大学"
        major="本科 通信工程"
        description="学习c语言相关技术，从此对编程产生兴趣，自学了html等相关的前端知识。"
      />
      <WorkExperience />
    </div>
  );
};

export default Resume;