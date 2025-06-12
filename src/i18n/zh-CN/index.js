export default {
  IndexPage: "主页",
  publicationPage: "成果",
  MemberPage: "成员",
  ProjectPage: "项目",
  JoinPage: "加入我们",
  LabName: "决策智能实验室（Decision Intelligence Lab）",
  desc_p1: "决策智能实验室依托华东师范大学，数据科学与工程学院，具有一支国际化，高水平导师团队，一人入选国家级领军人才，两人入选国家级青年人才。主要研究方向涵盖人工智能、机器学习和数据管理。通过对复杂异构数据（例如时间序列、时空数据、图、图像和分子结构等）进行高精度、高效率、自动的、高鲁棒性、可解释的分析和管理，助力不同行业的数字化转型和不同应用领域的决策支持。",
  desc_b1: "",
  desc_p2: "",
  l1: "时间序列分析",
  l2: "自动机器学习",
  l3: "异常检测",
  l4: "时空数据分析",
  l5: "AI for Science",
  l6: "预测",
  l7: "图分析",
  l8: "模型轻量化",
  l9: "决策智能",
  l10: "迁移学习与模型泛化",
  l11: "时序大模型",
  l12: "大模型评测",
  l13: "多智能体",
  l14: "具身智能",


  ro: "研究成果",
  roc: "实验室科研成果应用于绿色交通、智能运维、智慧城市、AIOps、数字能源、智能水资源管理、数字孪生、分子设计和药物设计等领域。",

  l1_tag: "智能运维、AIOps、数字孪生、数字能源",
  l1_desc:
    "助力数字化转型，赋能智能运维、智能交通、智慧城市、AIOps、数字能源、智能水资源管理等。\n时间序列是数字化转型带来的一种常见数据类型。时序数据中蕴含了大量的随时间变化的动态信息，对时序数据的有效分析能够为不同应用场景提供有效的决策支持。比如道路交通状况预测可以帮助司机提早进行分流，负载预测可以帮助适配器提早做好调整的准备，机器运行状况检测可以提早发现可能发生的故障，进而开展预测性维护等。我们的研究主要集中在两大类分析——预测和异常检测。在追求高精度的同时，还关注其时效性，鲁棒性，可解释性，以及自动化。\n",

  l4_tag: "绿色交通、智慧城市、智慧物流 ",
  l4_desc:
    "有效分析时空轨迹数据，赋能绿色交通、智慧城市和自动驾驶等。  时空数据包含随时间变化的空间信息，比如轨迹数据。我们的研究主要集中在如何有效利用大规模的时空轨迹数据，赋能智慧城市、绿色交通和自动驾驶等。具体来说，时空数据分析包括交通状态预估、偏好识别和导航决策。涉及到了表征学习、图学习、多任务学习和图算法等。研究成果已经应用于丹麦，德国，荷兰，希腊和塞浦路斯的若干合作单位的智能交通系统中。比如，提出的环保导航算法（Eco-routing）可以有效的减少交通领域的二氧化碳排量，已应用于丹麦北日德兰地区最大的交通调度公司FlexDanmark的多项服务中。",

  l7_tag: "智能交通、社交网络、分子设计 ",
  l7_desc:
    "高效图学习和图算法，支持绿色交通、智慧城市和分子设计。\n\n图由节点和边组成，可以有效的对多个实体之间的复杂关系进行建模。节点常常用于表示实体，连接两个节点的边则用于表示其对应的两个实体之间的某种关系。比如，一个城市的交通网络就可以表示成一个图，这里节点表示路口，边表示道路。我们的图分析工作主要包括：图表征学习（基于对比学习，弱监督学习，课程学习）、图属性预测、时序相关性学习和不确定性图的最短路径算法。 ",

  l2_tag: "降低各行业使用机器学习的门槛和成本",
  l2_desc:
    "自动构建高精度模型架构并自动选择超参数，降低不同行业使用机器学习门槛和成本。\n\n 当前高效的机器学习模型通常是由机器学习专家手工设计的，而这一人工设计过程冗长费力。自动机器学习则尝试由算法来自动化这一设计过程，自动构建高效的机器学习模型。这将大大降低各行业使用机器学习的门槛和使用机器学习的人力、物力和时间成本。我们的研究集中在可微神经架构搜索算法及其可解释性，神经架构和超参数联合搜索，以及这些方法在自动构建时序分析模型和基于物理信息的神经网络（Physics Informed Neural Network）的应用研究。",

  l5_tag: "助力科学发现和工业应用",
  l5_desc:
    "人工智能正在助力科学家进行科学发现，有望成为进行科学发现的新范式。我们的研究主要集中在基于神经网络的求解器和药物发现。",

  l8_tag: "边端设备智能化、工业智能、数字孪生、数字能源",
  l8_desc:
    "很多决策需要在边端设备完成，而边端设备通常只有有限的计算和存储资源，这就要求轻量化的决策模型。我们的研究主要集中在模型压缩。",

  l3_tag: "智能运维、AIOps",
  l3_desc:
    "助力智能运维，AIOps，欺诈检测。异常检测用于发现和正常状态不同的状态。由于异常状态很少出现，异常的种类也可能多种多样，这就造成传统的有监督异常检测算法很难有效工作。我们的研究集中在无监督异常检测，即在不需要异常标签的情况下，可以准确地检测异常。我们提出了基于自编码器（AutoEncoder）和集成学习（Ensemble  Learning）的异常检测算法，并关注其健壮性和可解释性。 ",

  l6_tag: "时序预测、图预测",
  l6_desc:
    "很多决策场景都需要对未知状态进行预测，比如预测未来将要发生的状态和估计数据缺失部分的状态。我们的工作主要集中在基于时间序列预测和基于图数据的预测。",

  l9_tag: "不确定决策、学习决策、多元决策等",
  l9_desc:
    "我们每个人每天都在做大量的决策。一个最典型的例子就是出行时的路径选择。决策之所以有时很复杂，是因为其要考虑很多因素而不仅仅是一个因素（比如要考虑旅行时间和碳排放），而这些因素又常常是不确定的。我们针对这些问题，以路径导航决策为例，进行了深入的研究。其研究成果已经应用于丹麦，德国，荷兰，希腊和塞浦路斯的若干合作单位的智能交通系统中。比如，提出的环保导航算法（Eco-routing）可以有效的减少交通领域的二氧化碳排量，已应用于丹麦北日德兰地区最大的交通调度公司FlexDanmark的多项服务中。",

  l10_tag: "",
  l10_desc: "迁移学习与模型泛化性",

  ls1_1: "1.1 时间序列预测",
  ls1_2: "1.2 时序异常检测",
  ls1_3: "1.3 时序分类",
  lst1_1_1: "Time-frequency domain based forecasting:",
  lst1_1_2: "Model-agnostic plugin:",
  lst1_1_3: "Automated correlated time series forecasting:",
  lst1_1_4: "Transformer-based forecasting:",
  lst1_1_5: "Robust forecasting: ",
  lst1_1_6: "Graph neural network based forecasting:",
  lst1_1_7: "Forecasting benchmarking:",
  lst1_1_8: "Continual learning for forecasting:",
  lst1_1_9: "Neural ODE-based forecasting：",
  lst1_1_10: "Markov Model-based forecasting:",
  lst1_1_11: "Others:",
  lst1_2_1: "Ensemble learning based outlier detection：",
  lst1_2_2: "Robust outlier detection：",
  lst1_2_3: "Frequency domain based outlier detection：",
  lst1_2_4: "Outlier detection foundation model： ",
  lst1_2_5: "Explainable outlier detection: ",
  lst1_2_6: "Ensemble learning based outlier detection：",

  ls4_1: "2.1 交通状态预估",
  ls4_2: "2.2 偏好识别",
  ls4_3: "2.3 数据驱动的导航决策",
  ls4_4: "2.4 其他",
  lst4_1_1: "路径交通状态:",
  lst4_1_2: "路网交通状态:",
  lst4_3_1: "不确定性下的决策:",
  lst4_3_2: "基于学习的决策:",
  lst4_3_3: "多元决策:",
  lst4_3_4: "Top-K 决策:",
  lst4_3_5: "Eco-routing:",

  ls7_1: "3.1 路径表征学习",
  ls7_2: "3.2 图属性预测",
  ls7_3: "3.3 时空序列关联性学习",
  ls7_4: "3.4 不确定性图的最短路径算法",

  lst6_4_1: "时间序列预测：",
  lst6_4_2: "基于图预测：",

  lst9_1_1: "不确定性下的决策：",
  lst9_1_2: "基于学习的决策：",
  lst9_1_3: "多元决策：",
  lst9_1_4: "Top-K 决策:",
  lst9_1_5: "Eco-routing:",
  lst9_1_6: "弹性伸缩、自动扩缩容（AutoScaling）:",

  lst10_1_1: "模型预训练与迁移学习（Pre-training, Fine-tuning, Model Zoo, Few-shot Learning）:",
  lst10_1_2: "分布外泛化（OOD Generalization）:",
  lst10_1_3: "领域适应（Domain Adaptation）:",


  r1: "机器学习，人工智能，数据管理与分析",
  r2: "时间序列分析，时空序列分析，图分析，AI for Science",
  r3: "自动机器学习，模型可解释性，健壮性，持续学习，轻量化模型，DB4AI",
  r4: "自拟方向（不局限于以上）",

  r5: "对学生的期望",
  r51: "具有自我驱动能、对自己未来有目标",
  r52: "具备扎实的编程和数学基础",
  r53: "具备良好的英文阅读和撰写能力，能用英文做口头报告",
  r54: "踏实、有责任心、善于沟通、有团队合作精神",

  r6: "培养方法",
  r61: "提供科研与应用结合的科研环境",
  r62: "课题选择兼顾高水平论文发表与工程实践应用",
  r63: "因人施教，充分考虑学生实际情况和需求，实现学生与导师共赢发展",
  r64: "注重国际化，积极提供各类国际交流机会",

  r7: "岗位描述",
  r71: "独立承担课题研究",
  r72: "协助指导研究生",

  r8: "岗位要求",
  r81: "具有或即将获得计算机等相关信息科学相关的博士学位，或其他理工科博士学位（主要针对AI for Science方向）",
  r82: "近三年以第一作者发表过高水平论文（比如CCF A类）",
  r83: "具有独立完成科研课题能力",

  r9: "联系我们",
  r91: "杨彬：",
  r92: "郭晨娟：",
  r93: "上海市普陀区中山北路3663号",

  r10: "待遇",
  r101: '<div class="md:tw-w-1/2 tw-w-5/6 tw-mx-auto tw-col-span-1 section animated fadeInUp my-element" data-v-09acb75a=""><div class="text-weight-bold" data-v-09acb75a="">待遇</div><ul data-v-09acb75a=""><li class="tw-list-decimal" id="0" data-v-09acb75a=""><div class="text-gray" data-v-09acb75a="">薪资待遇按华东师范大学博士后有关规定执行，博士后基础年薪20-40万/年，具体规定参照<a class="text-blue" style="display: inline-block" href="http://postdoctor.ecnu.edu.cn/34/1e/c14591a275486/page.htm" target="_blank">http://postdoctor.ecnu.edu.cn/34/1e/c14591a275486/page.htm</a>。优先支持申请国家，上海市和学校的各类博士后计划</div><ul class="md:tw-pl-5" data-v-09acb75a=""><li class="tw-list-disc text-gray" data-v-09acb75a="">国家“博新计划” （年薪40万+经费23万）</li><li class="tw-list-disc text-gray" data-v-09acb75a="">国家“博士后国际交流计划” （年薪30+万）</li><li class="tw-list-disc text-gray" data-v-09acb75a="">上海市“博士后创新创业计划” （年薪30万+经费10万）</li><li class="tw-list-disc text-gray" data-v-09acb75a="">学校“卓越博士后计划” (年薪25+万) ，条件优秀者将推荐申请华师大“光华”优秀博士后（年薪40万）;</li></ul></li><li class="tw-list-decimal" id="1" data-v-09acb75a=""><div class="text-gray" data-v-09acb75a="">全职博士后在站期间，学校按照国家规定为其缴纳社会保险和住房公积金。同时，学校为全职博士后提供2万元安家补贴，进站后一次性发放。</div><ul class="md:tw-pl-5" data-v-09acb75a=""></ul></li><li class="tw-list-decimal" id="2" data-v-09acb75a=""><div class="text-gray" data-v-09acb75a="">享受课题研究补贴</div><ul class="md:tw-pl-5" data-v-09acb75a=""></ul></li><li class="tw-list-decimal" id="3" data-v-09acb75a=""><div class="text-gray" data-v-09acb75a="">享受华东师范大学相应的工会待遇，住房、户口等其他方面根据华东师范大学相关政策执行。 </div><ul class="md:tw-pl-5" data-v-09acb75a=""></ul></li></ul></div>',

  address: "地址",
  email: "邮箱",
  wechat: "微信公众号",

  mp1: "导师",
  mp2: "博士生",
  mp3: "硕士生",
};
