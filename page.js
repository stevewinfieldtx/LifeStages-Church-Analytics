"use client";
import { useState, useMemo } from "react";

const D = {"church":{"name":"CrossPoint Church","code":"CP10","size":1000,"denomination":"Non-Denominational","region":"South / Bible Belt","total_events":3134},"cat_map":{"emotional":["stress","anxiety","depression","loneliness","selfworth","anger","guilt","fear","burnout"],"relational":["family_conflict","forgiveness","romantic","parenting","difficult_people","trust"],"circumstances":["grief","health","special_needs","financial","transitions","purpose"],"spiritual":["doubts","prayer","temptation","scripture","serving"],"recovery":["addiction","trauma","starting_over"]},"cat_pct":{"emotional":40.5,"circumstances":22.8,"relational":19.9,"spiritual":11.6,"recovery":5.2},"cat_monthly":{"2025-12":{"emotional":40.8,"circumstances":23.5,"relational":19.2,"spiritual":11.2,"recovery":5.3},"2026-01":{"relational":19.0,"emotional":41.4,"circumstances":22.8,"spiritual":11.5,"recovery":5.3},"2026-02":{"emotional":40.6,"relational":21.9,"circumstances":21.5,"spiritual":11.4,"recovery":4.5},"2026-03":{"spiritual":12.6,"emotional":37.9,"relational":18.8,"circumstances":24.6,"recovery":6.0},"_totals":{"2025-12":681,"2026-01":1083,"2026-02":903,"2026-03":467}},"cat_weekly":{"2025-W50":{"emotional":117,"circumstances":67,"relational":51,"spiritual":27,"recovery":17},"2025-W51":{"emotional":120,"relational":55,"spiritual":37,"circumstances":60,"recovery":11},"2025-W52":{"circumstances":33,"emotional":41,"recovery":8,"relational":25,"spiritual":12},"2026-W00":{"relational":30,"emotional":67,"circumstances":39,"spiritual":19,"recovery":7},"2026-W01":{"emotional":115,"circumstances":64,"relational":47,"spiritual":34,"recovery":9},"2026-W02":{"circumstances":60,"recovery":16,"emotional":98,"relational":45,"spiritual":25},"2026-W03":{"emotional":91,"circumstances":47,"spiritual":33,"relational":49,"recovery":10},"2026-W04":{"relational":47,"emotional":100,"circumstances":44,"spiritual":19,"recovery":18},"2026-W05":{"relational":45,"circumstances":50,"spiritual":23,"emotional":90,"recovery":16},"2026-W06":{"relational":51,"emotional":98,"spiritual":30,"circumstances":51,"recovery":6},"2026-W07":{"emotional":88,"spiritual":27,"circumstances":46,"relational":48,"recovery":10},"2026-W08":{"emotional":87,"circumstances":52,"relational":51,"spiritual":25,"recovery":9},"2026-W09":{"circumstances":60,"emotional":94,"relational":36,"spiritual":29,"recovery":12},"2026-W10":{"relational":43,"recovery":13,"emotional":64,"circumstances":43,"spiritual":23}},"cat_by_age":{"senior":{"emotional":32.9,"circumstances":27.1,"relational":16.3,"spiritual":19.4,"recovery":4.3},"young_adult":{"relational":25.7,"emotional":38.1,"circumstances":25.3,"recovery":3.7,"spiritual":7.3},"teens":{"emotional":57.7,"spiritual":14.0,"relational":13.1,"circumstances":8.6,"recovery":6.6},"adult":{"spiritual":12.8,"circumstances":28.7,"emotional":33.6,"relational":20.2,"recovery":4.6},"university":{"relational":14.5,"emotional":50.8,"circumstances":14.2,"spiritual":11.2,"recovery":9.4},"_totals":{"senior":258,"young_adult":986,"teens":442,"adult":1054,"university":394}},"ll_by_cat":{"emotional":{"fear":5.5,"stress":22.6,"anxiety":17.2,"loneliness":9.9,"selfworth":11.0,"depression":5.9,"burnout":12.6,"guilt":10.8,"anger":4.4},"circumstances":{"grief":19.0,"purpose":18.9,"special_needs":10.2,"health":18.6,"transitions":13.7,"financial":19.7},"relational":{"romantic":22.0,"parenting":21.3,"forgiveness":8.5,"trust":13.0,"family_conflict":24.6,"difficult_people":10.6},"spiritual":{"serving":21.5,"doubts":19.3,"prayer":22.0,"temptation":22.6,"scripture":14.6},"recovery":{"addiction":39.5,"starting_over":28.4,"trauma":32.1}},"ll_monthly":{"2025-12":{"fear":14,"grief":26,"romantic":35,"serving":15,"parenting":31,"forgiveness":5,"stress":58,"anxiety":51,"doubts":18,"loneliness":35,"selfworth":36,"trust":16,"purpose":32,"special_needs":17,"prayer":13,"health":33,"depression":12,"burnout":29,"family_conflict":28,"guilt":28,"temptation":23,"transitions":25,"financial":27,"scripture":7,"addiction":16,"starting_over":12,"difficult_people":16,"trauma":8,"anger":15},"2026-01":{"parenting":43,"anxiety":82,"burnout":48,"stress":110,"health":44,"doubts":20,"romantic":39,"depression":28,"temptation":22,"family_conflict":53,"purpose":45,"starting_over":14,"financial":55,"loneliness":48,"forgiveness":24,"trust":30,"fear":22,"difficult_people":17,"scripture":21,"selfworth":45,"transitions":33,"guilt":46,"trauma":21,"anger":19,"prayer":28,"serving":34,"grief":45,"special_needs":25,"addiction":22},"2026-02":{"loneliness":27,"family_conflict":51,"anxiety":58,"purpose":41,"stress":88,"parenting":42,"selfworth":34,"prayer":25,"guilt":41,"scripture":14,"depression":23,"forgiveness":14,"romantic":44,"financial":33,"health":35,"grief":38,"trust":26,"trauma":13,"transitions":23,"starting_over":11,"temptation":22,"doubts":24,"difficult_people":21,"anger":19,"special_needs":24,"fear":18,"addiction":17,"burnout":59,"serving":18},"2026-03":{"serving":11,"guilt":22,"anxiety":28,"romantic":19,"forgiveness":10,"parenting":17,"purpose":17,"stress":31,"burnout":24,"family_conflict":21,"addiction":9,"transitions":17,"prayer":14,"scripture":11,"fear":16,"grief":27,"financial":26,"starting_over":9,"depression":12,"doubts":8,"selfworth":25,"difficult_people":12,"anger":3,"loneliness":16,"health":21,"temptation":15,"trust":9,"trauma":10,"special_needs":7}},"ll_monthly_totals":{"2025-12":681,"2026-01":1083,"2026-02":903,"2026-03":467},"ll_by_age":{"emotional":{"senior":{"fear":8.2,"depression":9.4,"selfworth":5.9,"loneliness":30.6,"anger":5.9,"guilt":15.3,"stress":15.3,"burnout":3.5,"anxiety":5.9},"teens":{"fear":6.7,"stress":19.6,"loneliness":14.1,"selfworth":23.1,"anxiety":23.1,"guilt":2.7,"anger":5.9,"burnout":2.7,"depression":2.0},"young_adult":{"anxiety":24.2,"stress":22.6,"burnout":17.6,"fear":5.6,"loneliness":2.9,"guilt":14.1,"anger":4.0,"depression":3.7,"selfworth":5.3},"university":{"stress":23.0,"loneliness":16.5,"selfworth":16.0,"fear":3.5,"guilt":4.5,"anxiety":17.5,"depression":13.5,"burnout":2.5,"anger":3.0},"adult":{"stress":26.3,"selfworth":6.8,"guilt":15.5,"loneliness":5.6,"burnout":22.3,"anxiety":8.2,"anger":4.2,"depression":5.9,"fear":5.1}},"circumstances":{"senior":{"grief":30.0,"transitions":5.7,"special_needs":2.9,"health":27.1,"purpose":27.1,"financial":7.1},"adult":{"purpose":22.8,"special_needs":14.5,"grief":20.1,"health":19.1,"financial":15.2,"transitions":8.3},"young_adult":{"purpose":4.8,"special_needs":8.8,"grief":18.5,"transitions":23.3,"financial":26.5,"health":18.1},"teens":{"health":15.8,"purpose":18.4,"financial":18.4,"transitions":15.8,"grief":18.4,"special_needs":13.2},"university":{"purpose":50.0,"transitions":8.9,"financial":30.4,"health":8.9,"grief":1.8}},"relational":{"young_adult":{"romantic":30.4,"parenting":28.9,"family_conflict":24.1,"trust":4.7,"difficult_people":6.3,"forgiveness":5.5},"university":{"forgiveness":24.6,"difficult_people":14.0,"trust":12.3,"romantic":35.1,"family_conflict":5.3,"parenting":8.8},"senior":{"trust":52.4,"family_conflict":4.8,"parenting":4.8,"romantic":11.9,"forgiveness":14.3,"difficult_people":11.9},"teens":{"trust":37.9,"romantic":10.3,"difficult_people":25.9,"forgiveness":12.1,"family_conflict":13.8},"adult":{"parenting":24.9,"family_conflict":37.1,"romantic":13.6,"difficult_people":10.3,"trust":8.5,"forgiveness":5.6}},"spiritual":{"adult":{"serving":31.9,"prayer":31.1,"scripture":11.1,"doubts":12.6,"temptation":13.3},"teens":{"doubts":37.1,"temptation":25.8,"serving":12.9,"scripture":14.5,"prayer":9.7},"university":{"doubts":31.8,"temptation":47.7,"scripture":9.1,"prayer":6.8,"serving":4.5},"senior":{"prayer":32.0,"scripture":28.0,"serving":20.0,"temptation":10.0,"doubts":10.0},"young_adult":{"serving":20.8,"temptation":30.6,"prayer":18.1,"doubts":15.3,"scripture":15.3}},"recovery":{"adult":{"addiction":28.6,"trauma":34.7,"starting_over":36.7},"young_adult":{"starting_over":25.0,"addiction":33.3,"trauma":41.7},"senior":{"addiction":45.5,"trauma":9.1,"starting_over":45.5},"university":{"trauma":37.8,"addiction":43.2,"starting_over":18.9},"teens":{"starting_over":24.1,"addiction":58.6,"trauma":17.2}}},"ll_age_pct":{"fear":{"senior":10.0,"teens":24.3,"young_adult":30.0,"university":10.0,"adult":25.7},"grief":{"senior":15.4,"adult":44.9,"young_adult":33.8,"teens":5.1,"university":0.7},"romantic":{"young_adult":56.2,"teens":4.4,"adult":21.2,"university":14.6,"senior":3.6},"serving":{"adult":55.1,"young_adult":19.2,"senior":12.8,"teens":10.3,"university":2.6},"parenting":{"young_adult":54.9,"adult":39.8,"university":3.8,"senior":1.5},"forgiveness":{"university":26.4,"teens":13.2,"young_adult":26.4,"adult":22.6,"senior":11.3},"stress":{"teens":17.4,"university":16.0,"adult":32.4,"young_adult":29.6,"senior":4.5},"anxiety":{"young_adult":41.6,"teens":26.9,"adult":13.2,"university":16.0,"senior":2.3},"doubts":{"teens":32.9,"university":20.0,"adult":24.3,"young_adult":15.7,"senior":7.1},"loneliness":{"teens":28.6,"university":26.2,"young_adult":8.7,"adult":15.9,"senior":20.6},"selfworth":{"teens":42.1,"adult":17.1,"senior":3.6,"university":22.9,"young_adult":14.3},"trust":{"senior":27.2,"teens":27.2,"young_adult":14.8,"university":8.6,"adult":22.2},"purpose":{"adult":51.1,"young_adult":8.9,"university":20.7,"teens":5.2,"senior":14.1},"special_needs":{"adult":60.3,"young_adult":30.1,"senior":2.7,"teens":6.8},"prayer":{"adult":52.5,"senior":20.0,"young_adult":16.2,"university":3.8,"teens":7.5},"health":{"teens":4.5,"adult":43.6,"young_adult":33.8,"senior":14.3,"university":3.8},"depression":{"senior":10.7,"young_adult":18.7,"adult":28.0,"university":36.0,"teens":6.7},"burnout":{"young_adult":41.2,"adult":49.4,"university":3.1,"teens":4.4,"senior":1.9},"family_conflict":{"young_adult":39.9,"adult":51.6,"senior":1.3,"university":2.0,"teens":5.2},"guilt":{"adult":40.1,"teens":5.1,"young_adult":38.7,"university":6.6,"senior":9.5},"temptation":{"teens":19.5,"university":25.6,"young_adult":26.8,"adult":22.0,"senior":6.1},"transitions":{"young_adult":59.2,"senior":4.1,"teens":6.1,"university":5.1,"adult":25.5},"financial":{"teens":5.0,"young_adult":46.8,"adult":32.6,"university":12.1,"senior":3.5},"scripture":{"adult":28.3,"senior":26.4,"young_adult":20.8,"teens":17.0,"university":7.5},"addiction":{"adult":21.9,"senior":7.8,"young_adult":18.8,"teens":26.6,"university":25.0},"starting_over":{"young_adult":19.6,"teens":15.2,"adult":39.1,"university":15.2,"senior":10.9},"difficult_people":{"university":12.1,"young_adult":24.2,"adult":33.3,"teens":22.7,"senior":7.6},"trauma":{"university":26.9,"young_adult":28.8,"adult":32.7,"senior":1.9,"teens":9.6},"anger":{"young_adult":26.8,"teens":26.8,"adult":26.8,"senior":8.9,"university":10.7}},"ll_weekly":{"2025-W50":{"fear":2.2,"grief":3.6,"romantic":5.0,"serving":2.2,"parenting":4.7,"forgiveness":0.7,"stress":9.3,"anxiety":9.3,"doubts":2.5,"loneliness":3.9,"selfworth":6.1,"trust":2.5,"purpose":6.1,"special_needs":2.2,"prayer":2.2,"health":3.9,"depression":1.4,"burnout":4.3,"family_conflict":2.9,"guilt":3.2,"temptation":1.8,"transitions":4.3,"financial":3.9,"scripture":1.1,"addiction":2.5,"starting_over":1.8,"difficult_people":2.5,"trauma":1.8,"anger":2.2},"2025-W51":{"selfworth":6.0,"romantic":6.0,"serving":2.1,"depression":2.5,"anxiety":5.3,"parenting":3.9,"loneliness":6.0,"temptation":4.9,"health":6.4,"addiction":2.1,"purpose":3.2,"guilt":6.0,"trust":2.1,"burnout":4.2,"grief":4.6,"anger":2.1,"family_conflict":4.2,"difficult_people":2.8,"stress":8.5,"financial":2.8,"scripture":0.7,"doubts":3.5,"transitions":2.8,"prayer":1.8,"starting_over":1.4,"special_needs":1.4,"fear":1.8,"forgiveness":0.4,"trauma":0.4},"2025-W52":{"transitions":4.2,"anxiety":8.4,"burnout":4.2,"addiction":2.5,"family_conflict":6.7,"serving":2.5,"fear":2.5,"selfworth":1.7,"temptation":3.4,"romantic":3.4,"guilt":1.7,"parenting":5.9,"grief":2.5,"trust":2.5,"special_needs":5.9,"financial":6.7,"difficult_people":0.8,"trauma":1.7,"depression":0.8,"starting_over":2.5,"loneliness":5.9,"forgiveness":1.7,"purpose":5.0,"prayer":1.7,"stress":6.7,"anger":2.5,"health":3.4,"scripture":1.7,"doubts":0.8},"2026-W00":{"parenting":3.1,"anxiety":5.6,"burnout":4.3,"stress":11.7,"health":4.3,"doubts":3.1,"romantic":3.1,"depression":3.7,"temptation":1.2,"family_conflict":4.9,"purpose":6.8,"starting_over":1.9,"financial":4.3,"loneliness":5.6,"forgiveness":3.7,"trust":1.2,"fear":1.9,"difficult_people":2.5,"scripture":1.9,"selfworth":4.9,"transitions":4.3,"guilt":2.5,"trauma":1.2,"anger":1.2,"prayer":1.9,"serving":3.7,"grief":3.1,"special_needs":1.2,"addiction":1.2},"2026-W01":{"anxiety":8.9,"grief":4.1,"family_conflict":4.8,"depression":3.7,"serving":3.3,"stress":8.9,"guilt":4.5,"financial":7.1,"prayer":3.3,"romantic":3.3,"loneliness":3.0,"temptation":3.3,"anger":2.2,"selfworth":3.0,"forgiveness":1.5,"burnout":6.7,"parenting":3.7,"difficult_people":2.2,"purpose":3.3,"special_needs":2.2,"health":4.8,"addiction":1.1,"trust":1.9,"starting_over":1.1,"fear":1.9,"scripture":1.1,"transitions":2.2,"doubts":1.5,"trauma":1.1},"2026-W02":{"grief":5.3,"trauma":2.9,"stress":9.8,"guilt":6.1,"parenting":4.5,"health":4.1,"purpose":4.9,"loneliness":4.9,"temptation":2.5,"special_needs":2.5,"anxiety":7.0,"doubts":1.2,"family_conflict":4.9,"starting_over":1.2,"depression":1.2,"selfworth":3.7,"financial":4.9,"addiction":2.5,"trust":3.7,"scripture":2.0,"transitions":2.9,"prayer":2.9,"fear":2.0,"burnout":4.5,"serving":1.6,"anger":0.8,"forgiveness":2.0,"romantic":3.3},"2026-W03":{"selfworth":4.8,"anxiety":6.5,"financial":3.5,"burnout":3.9,"stress":9.1,"loneliness":5.7,"scripture":3.9,"serving":4.3,"guilt":3.0,"depression":3.0,"parenting":4.3,"prayer":1.7,"purpose":2.2,"doubts":2.2,"difficult_people":2.2,"grief":3.0,"transitions":4.3,"trust":3.0,"special_needs":3.5,"health":3.9,"temptation":2.2,"romantic":3.9,"family_conflict":6.1,"fear":1.7,"addiction":3.0,"anger":1.7,"forgiveness":1.7,"starting_over":0.4,"trauma":0.9},"2026-W04":{"trust":3.9,"stress":11.4,"guilt":4.8,"selfworth":5.7,"financial":4.4,"serving":2.2,"addiction":1.8,"family_conflict":3.5,"purpose":4.4,"prayer":2.6,"fear":2.2,"grief":4.4,"anxiety":9.6,"romantic":5.3,"parenting":3.9,"anger":3.1,"depression":1.3,"health":2.6,"loneliness":4.4,"doubts":1.8,"burnout":1.3,"difficult_people":1.3,"transitions":1.8,"trauma":3.9,"forgiveness":2.6,"starting_over":2.2,"special_needs":1.8,"scripture":1.3,"temptation":0.4},"2026-W05":{"forgiveness":1.3,"grief":4.5,"prayer":2.7,"difficult_people":1.3,"loneliness":2.2,"fear":2.2,"stress":10.7,"anxiety":6.7,"trust":2.7,"guilt":4.0,"doubts":2.7,"financial":4.5,"addiction":3.1,"family_conflict":7.1,"purpose":4.9,"parenting":4.9,"romantic":2.7,"depression":1.3,"scripture":1.8,"selfworth":2.2,"starting_over":1.3,"temptation":2.2,"burnout":8.9,"trauma":2.7,"health":4.0,"transitions":3.6,"serving":0.9,"special_needs":0.9,"anger":1.8},"2026-W06":{"romantic":6.4,"stress":9.7,"prayer":3.4,"transitions":3.0,"serving":3.8,"grief":5.1,"special_needs":4.2,"forgiveness":2.1,"burnout":5.5,"family_conflict":5.1,"health":3.4,"temptation":2.1,"loneliness":3.4,"financial":2.1,"anxiety":7.6,"depression":2.1,"parenting":3.0,"scripture":0.8,"guilt":4.7,"anger":2.1,"selfworth":4.2,"doubts":2.5,"starting_over":0.8,"fear":2.1,"addiction":1.7,"difficult_people":2.5,"trust":2.5,"purpose":3.8},"2026-W07":{"guilt":4.1,"burnout":6.8,"stress":8.2,"anxiety":6.4,"doubts":2.3,"selfworth":3.7,"financial":5.5,"trust":2.7,"romantic":5.5,"transitions":1.4,"depression":4.1,"parenting":5.9,"serving":2.3,"loneliness":2.7,"trauma":1.4,"anger":2.3,"prayer":3.7,"forgiveness":0.9,"temptation":3.7,"grief":2.7,"health":4.1,"family_conflict":3.2,"starting_over":1.4,"purpose":5.5,"special_needs":1.8,"addiction":1.8,"difficult_people":3.7,"fear":1.8,"scripture":0.5},"2026-W08":{"guilt":5.4,"special_needs":3.1,"depression":3.1,"loneliness":2.7,"parenting":5.4,"health":4.5,"family_conflict":6.7,"temptation":1.8,"romantic":4.5,"burnout":5.4,"doubts":3.6,"trauma":0.9,"transitions":3.1,"fear":2.2,"grief":4.9,"stress":9.4,"starting_over":1.3,"scripture":3.1,"anxiety":4.5,"trust":2.7,"forgiveness":1.8,"difficult_people":1.8,"financial":3.6,"purpose":4.0,"addiction":1.8,"serving":1.3,"selfworth":4.5,"prayer":1.3,"anger":1.8},"2026-W09":{"financial":6.1,"guilt":4.8,"romantic":2.6,"selfworth":4.3,"stress":9.1,"health":4.8,"loneliness":5.6,"transitions":2.6,"forgiveness":1.7,"anxiety":5.6,"family_conflict":4.3,"burnout":6.5,"prayer":3.0,"difficult_people":1.7,"trust":2.2,"parenting":3.0,"trauma":1.7,"grief":6.5,"depression":2.6,"temptation":4.8,"special_needs":2.2,"addiction":1.7,"scripture":1.7,"fear":2.2,"purpose":3.9,"starting_over":1.7,"doubts":1.7,"serving":1.3},"2026-W10":{"parenting":3.8,"starting_over":2.2,"selfworth":6.5,"family_conflict":5.4,"health":4.3,"purpose":3.2,"fear":5.4,"financial":4.8,"burnout":4.3,"special_needs":1.1,"trust":2.2,"temptation":1.6,"romantic":5.4,"scripture":2.7,"trauma":3.2,"guilt":4.3,"difficult_people":3.8,"stress":4.3,"grief":5.4,"serving":3.8,"prayer":3.2,"anxiety":5.9,"depression":2.2,"transitions":4.3,"loneliness":0.5,"forgiveness":2.7,"addiction":1.6,"doubts":1.1,"anger":1.1}},"expr_pct":{"fear":{"death":21.4,"future":25.7,"failure":30.0,"abandonment":22.9},"grief":{"sibling":8.8,"child":10.3,"spouse":14.7,"miscarriage":5.9,"anticipatory":16.2,"parent":18.4,"cumulative":8.8,"friend":7.4,"relationship":7.4,"pet":1.5,"grandparent":0.7},"romantic":{"singleness":18.2,"crushes":9.5,"new_marriage":13.9,"boundaries":20.4,"dating_after":8.8,"keeping_love":21.2,"marriage_struggles":8.0},"serving":{"church_hurt":30.8,"community":42.3,"without_burnout":26.9},"parenting":{"new_parent":18.8,"mentoring":40.6,"young_kids":15.8,"letting_go":15.0,"parenting_teens":9.8},"forgiveness":{"family":35.8,"yourself":37.7,"ex":9.4,"friends":17.0},"stress":{"family":23.7,"overscheduled":25.4,"workplace":8.0,"early_career":9.8,"financial":17.8,"exam_degree":4.5,"school_academic":9.4,"health_mgmt":1.4},"anxiety":{"performance":25.1,"parenting":18.3,"future":20.1,"social":10.5,"general":22.8,"health":3.2},"doubts":{"science":14.3,"god_real":17.1,"suffering":34.3,"after_tragedy":18.6,"own_faith":15.7},"loneliness":{"digital":24.6,"new_city":19.0,"isolation_marriage":15.9,"not_fitting_in":15.9,"loss_companions":20.6,"empty_nest":4.0},"selfworth":{"comparison":31.4,"aging":6.4,"identity_christ":29.3,"body_image":21.4,"new_role":5.7,"professional":5.7},"trust":{"trusting_god":42.0,"friendship":17.3,"after_trauma":25.9,"marriage":14.8},"purpose":{"gods_plan":39.3,"midlife":14.8,"what_to_be":10.4,"legacy":23.0,"career_calling":10.4,"meaningful":2.2},"special_needs":{"caregiver_grief":11.0,"sibling_sn":6.8,"faith_disability":19.2,"living_asd":20.5,"parenting_sn":11.0,"grandparent_sn":13.7,"friend_support":8.2,"independence":9.6},"prayer":{"hearing":33.8,"lifestyle":30.0,"empty":28.7,"learning":7.5},"health":{"mental_health":13.5,"serious":10.5,"aging_body":14.3,"caring_sick":27.1,"fertility":7.5,"chronic":27.1},"depression":{"seasonal":28.0,"loss_motivation":29.3,"persistent":26.7,"postpartum":6.7,"midlife":9.3},"burnout":{"worklife":35.0,"new_parent":14.4,"caregiver":18.1,"ministry":26.2,"academic":6.2},"family_conflict":{"inlaw":19.0,"marriage":23.5,"adult_child":23.5,"leaving_home":2.0,"blended":26.8,"parent_teen":5.2},"guilt":{"regret":14.6,"secret_shame":35.8,"not_enough":19.7,"past_mistakes":29.9},"temptation":{"substance":11.0,"habitual":28.0,"digital":28.0,"corners":14.6,"sexual":18.3},"transitions":{"divorce":16.3,"retirement":1.0,"moving":23.5,"baby":14.3,"first_job":7.1,"marriage":12.2,"career_change":12.2,"empty_nest":8.2,"high_school":3.1,"college":2.0},"financial":{"poverty":34.0,"student_debt":15.6,"retirement":9.2,"providing":17.0,"job_loss":15.6,"budget":8.5},"scripture":{"teaching":20.8,"theological":34.0,"personal":32.1,"where_start":13.2},"addiction":{"pornography":23.4,"loving_addict":12.5,"substance":21.9,"gambling":14.1,"social_media":28.1},"starting_over":{"after_divorce":17.4,"prodigal":43.5,"after_failure":15.2,"after_loss":17.4,"after_incarceration":6.5},"difficult_people":{"toxic_friends":34.8,"family_member":28.8,"coworker":19.7,"church_members":9.1,"bullying":7.6},"trauma":{"ptsd":25.0,"childhood":28.8,"sexual_assault":28.8,"domestic":17.3},"anger":{"at_god":44.6,"authority":8.9,"injustice":26.8,"irritability":19.6}},"comparison":{"cat":{"yours":{"emotional":40.5,"circumstances":22.8,"relational":19.9,"spiritual":11.6,"recovery":5.2},"size":{"emotional":36.5,"circumstances":25.6,"relational":18.8,"spiritual":14.1,"recovery":5.1},"denom":{"emotional":42.5,"circumstances":21.7,"relational":18.4,"spiritual":12.2,"recovery":5.2},"region":{"emotional":36.9,"relational":18.6,"spiritual":16.7,"circumstances":22.6,"recovery":5.2}},"ll":{"yours":{"fear":2.2,"grief":4.3,"romantic":4.4,"serving":2.5,"parenting":4.2,"forgiveness":1.7,"stress":9.2,"anxiety":7.0,"doubts":2.2,"loneliness":4.0,"selfworth":4.5,"trust":2.6,"purpose":4.3,"special_needs":2.3,"prayer":2.6,"health":4.2,"depression":2.4,"burnout":5.1,"family_conflict":4.9,"guilt":4.4,"temptation":2.6,"transitions":3.1,"financial":4.5,"scripture":1.7,"addiction":2.0,"starting_over":1.5,"difficult_people":2.1,"trauma":1.7,"anger":1.8},"size":{"guilt":4.6,"transitions":2.6,"parenting":4.6,"temptation":2.5,"purpose":4.8,"grief":5.5,"stress":8.2,"anxiety":5.5,"special_needs":2.5,"selfworth":3.5,"burnout":4.6,"financial":5.1,"depression":2.1,"family_conflict":4.9,"prayer":3.6,"serving":3.4,"romantic":3.4,"trauma":1.6,"health":5.1,"addiction":2.0,"scripture":2.3,"fear":2.4,"trust":2.6,"difficult_people":1.8,"loneliness":4.2,"forgiveness":1.5,"doubts":2.4,"anger":1.6,"starting_over":1.5},"denom":{"guilt":3.7,"transitions":2.7,"parenting":4.1,"temptation":2.4,"purpose":4.0,"grief":4.2,"stress":10.0,"anxiety":7.7,"special_needs":2.5,"selfworth":4.9,"burnout":4.8,"financial":4.2,"depression":2.6,"family_conflict":4.2,"prayer":2.8,"serving":2.7,"romantic":4.4,"trauma":1.6,"health":4.2,"addiction":2.0,"scripture":1.9,"fear":2.3,"trust":2.1,"difficult_people":1.9,"loneliness":4.7,"forgiveness":1.7,"doubts":2.4,"anger":1.8,"starting_over":1.5},"region":{"stress":7.8,"parenting":4.3,"scripture":2.6,"fear":2.4,"doubts":3.1,"prayer":4.2,"loneliness":3.9,"temptation":3.3,"financial":4.4,"grief":4.5,"depression":2.1,"anger":1.8,"health":4.5,"burnout":5.6,"purpose":4.1,"selfworth":3.4,"addiction":2.1,"special_needs":2.4,"guilt":4.0,"anxiety":5.7,"serving":3.4,"trust":2.3,"transitions":2.6,"family_conflict":4.5,"starting_over":1.5,"difficult_people":2.1,"trauma":1.6,"forgiveness":1.8,"romantic":3.6}}},"insights":{"overview":{"changes":{"emotional":-7,"circumstances":14,"relational":-14,"spiritual":11,"recovery":33},"fastest":["recovery",33],"biggest":["emotional",40.5],"smallest":["recovery",5.2]},"by_cat":{"emotional":{"mom":{"fear":72,"stress":-32,"anxiety":-7,"loneliness":15,"selfworth":42,"depression":1,"burnout":-21,"guilt":4,"anger":-69},"fastest":["fear",72],"declining":["anger",-69],"age_dominant":{"fear":["young_adult",30.0],"stress":["adult",32.4],"anxiety":["young_adult",41.6],"loneliness":["teens",28.6],"selfworth":["teens",42.1],"depression":["university",36.0],"burnout":["adult",49.4],"guilt":["adult",40.1],"anger":["young_adult",26.8]},"top3":[["stress",22.6],["anxiety",17.2],["burnout",12.6]]},"circumstances":{"mom":{"grief":37,"purpose":-20,"special_needs":-44,"health":16,"transitions":43,"financial":52},"fastest":["financial",52],"declining":["special_needs",-44],"age_dominant":{"grief":["adult",44.9],"purpose":["adult",51.1],"special_needs":["adult",60.3],"health":["adult",43.6],"transitions":["young_adult",59.2],"financial":["young_adult",46.8]},"top3":[["financial",19.7],["grief",19.0],["purpose",18.9]]},"relational":{"mom":{"romantic":-17,"parenting":-22,"forgiveness":38,"trust":-33,"family_conflict":-20,"difficult_people":10},"fastest":["forgiveness",38],"declining":["trust",-33],"age_dominant":{"romantic":["young_adult",56.2],"parenting":["young_adult",54.9],"forgiveness":["university",26.4],"trust":["senior",27.2],"family_conflict":["adult",51.6],"difficult_people":["adult",33.3]},"top3":[["family_conflict",24.6],["romantic",22.0],["parenting",21.3]]},"spiritual":{"mom":{"serving":18,"doubts":-36,"prayer":8,"temptation":32,"scripture":52},"fastest":["scripture",52],"declining":["doubts",-36],"age_dominant":{"serving":["adult",55.1],"doubts":["teens",32.9],"prayer":["adult",52.5],"temptation":["young_adult",26.8],"scripture":["adult",28.3]},"top3":[["temptation",22.6],["prayer",22.0],["serving",21.5]]},"recovery":{"mom":{"addiction":2,"starting_over":58,"trauma":49},"fastest":["starting_over",58],"declining":["addiction",2],"age_dominant":{"addiction":["teens",26.6],"starting_over":["adult",39.1],"trauma":["adult",32.7]},"top3":[["addiction",39.5],["trauma",32.1],["starting_over",28.4]]}},"by_ll":{"fear":{"top_age":["young_adult",30.0],"top_expr":["failure",30.0],"vs_peers":-8,"yours_pct":2.2,"peers_pct":2.4},"grief":{"top_age":["adult",44.9],"top_expr":["parent",18.4],"vs_peers":-22,"yours_pct":4.3,"peers_pct":5.5},"romantic":{"top_age":["young_adult",56.2],"top_expr":["keeping_love",21.2],"vs_peers":29,"yours_pct":4.4,"peers_pct":3.4},"serving":{"top_age":["adult",55.1],"top_expr":["community",42.3],"vs_peers":-26,"yours_pct":2.5,"peers_pct":3.4},"parenting":{"top_age":["young_adult",54.9],"top_expr":["mentoring",40.6],"vs_peers":-9,"yours_pct":4.2,"peers_pct":4.6},"forgiveness":{"top_age":["university",26.4],"top_expr":["yourself",37.7],"vs_peers":13,"yours_pct":1.7,"peers_pct":1.5},"stress":{"top_age":["adult",32.4],"top_expr":["overscheduled",25.4],"vs_peers":12,"yours_pct":9.2,"peers_pct":8.2},"anxiety":{"top_age":["young_adult",41.6],"top_expr":["performance",25.1],"vs_peers":27,"yours_pct":7.0,"peers_pct":5.5},"doubts":{"top_age":["teens",32.9],"top_expr":["suffering",34.3],"vs_peers":-8,"yours_pct":2.2,"peers_pct":2.4},"loneliness":{"top_age":["teens",28.6],"top_expr":["digital",24.6],"vs_peers":-5,"yours_pct":4.0,"peers_pct":4.2},"selfworth":{"top_age":["teens",42.1],"top_expr":["comparison",31.4],"vs_peers":29,"yours_pct":4.5,"peers_pct":3.5},"trust":{"top_age":["senior",27.2],"top_expr":["trusting_god",42.0],"vs_peers":0,"yours_pct":2.6,"peers_pct":2.6},"purpose":{"top_age":["adult",51.1],"top_expr":["gods_plan",39.3],"vs_peers":-10,"yours_pct":4.3,"peers_pct":4.8},"special_needs":{"top_age":["adult",60.3],"top_expr":["living_asd",20.5],"vs_peers":-8,"yours_pct":2.3,"peers_pct":2.5},"prayer":{"top_age":["adult",52.5],"top_expr":["hearing",33.8],"vs_peers":-28,"yours_pct":2.6,"peers_pct":3.6},"health":{"top_age":["adult",43.6],"top_expr":["caring_sick",27.1],"vs_peers":-18,"yours_pct":4.2,"peers_pct":5.1},"depression":{"top_age":["university",36.0],"top_expr":["loss_motivation",29.3],"vs_peers":14,"yours_pct":2.4,"peers_pct":2.1},"burnout":{"top_age":["adult",49.4],"top_expr":["worklife",35.0],"vs_peers":11,"yours_pct":5.1,"peers_pct":4.6},"family_conflict":{"top_age":["adult",51.6],"top_expr":["blended",26.8],"vs_peers":0,"yours_pct":4.9,"peers_pct":4.9},"guilt":{"top_age":["adult",40.1],"top_expr":["secret_shame",35.8],"vs_peers":-4,"yours_pct":4.4,"peers_pct":4.6},"temptation":{"top_age":["young_adult",26.8],"top_expr":["habitual",28.0],"vs_peers":4,"yours_pct":2.6,"peers_pct":2.5},"transitions":{"top_age":["young_adult",59.2],"top_expr":["moving",23.5],"vs_peers":19,"yours_pct":3.1,"peers_pct":2.6},"financial":{"top_age":["young_adult",46.8],"top_expr":["poverty",34.0],"vs_peers":-12,"yours_pct":4.5,"peers_pct":5.1},"scripture":{"top_age":["adult",28.3],"top_expr":["theological",34.0],"vs_peers":-26,"yours_pct":1.7,"peers_pct":2.3},"addiction":{"top_age":["teens",26.6],"top_expr":["social_media",28.1],"vs_peers":0,"yours_pct":2.0,"peers_pct":2.0},"starting_over":{"top_age":["adult",39.1],"top_expr":["prodigal",43.5],"vs_peers":0,"yours_pct":1.5,"peers_pct":1.5},"difficult_people":{"top_age":["adult",33.3],"top_expr":["toxic_friends",34.8],"vs_peers":17,"yours_pct":2.1,"peers_pct":1.8},"trauma":{"top_age":["adult",32.7],"top_expr":["childhood",28.8],"vs_peers":6,"yours_pct":1.7,"peers_pct":1.6},"anger":{"top_age":["young_adult",26.8],"top_expr":["at_god",44.6],"vs_peers":12,"yours_pct":1.8,"peers_pct":1.6}},"by_age":{"teens":{"top_cat":["emotional",57.7],"top_lls":[["addiction",58.6],["trust",37.9],["doubts",37.1]]},"university":{"top_cat":["emotional",50.8],"top_lls":[["purpose",50.0],["temptation",47.7],["addiction",43.2]]},"young_adult":{"top_cat":["emotional",38.1],"top_lls":[["trauma",41.7],["addiction",33.3],["temptation",30.6]]},"adult":{"top_cat":["emotional",33.6],"top_lls":[["family_conflict",37.1],["starting_over",36.7],["trauma",34.7]]},"senior":{"top_cat":["emotional",32.9],"top_lls":[["trust",52.4],["addiction",45.5],["starting_over",45.5]]}}}};

const CL = {emotional:"Emotional & Mental",relational:"Relationships",circumstances:"Life Circumstances",spiritual:"Spiritual Growth",recovery:"Recovery & Healing"};
const CC = {emotional:"#ef4444",relational:"#f59e0b",circumstances:"#3b82f6",spiritual:"#8b5cf6",recovery:"#10b981"};
const LL = {stress:"Stress",anxiety:"Anxiety",burnout:"Burnout",family_conflict:"Family Conflict",financial:"Financial Pressure",selfworth:"Self-Worth",romantic:"Romantic Relationships",guilt:"Guilt & Shame",grief:"Grief & Loss",purpose:"Purpose & Direction",loneliness:"Loneliness",parenting:"Parenting",health:"Health Challenges",depression:"Depression",transitions:"Life Transitions",temptation:"Temptation",fear:"Fear",trust:"Trust",special_needs:"Special Needs",doubts:"Faith Doubts",prayer:"Prayer",forgiveness:"Forgiveness",serving:"Serving & Community",scripture:"Scripture",difficult_people:"Difficult People",anger:"Anger",addiction:"Addiction",trauma:"Past Trauma",starting_over:"Starting Over"};
const AL = {teens:"Teens (13-17)",university:"University (18-23)",young_adult:"Young Adult (24-39)",adult:"Adult (40-64)",senior:"Senior (65+)"};
const AGES = ["teens","university","young_adult","adult","senior"];
const CATS = ["emotional","relational","circumstances","spiritual","recovery"];

function Bar({data,max,color="#3b82f6",onClick,highlight,suffix="%"}) {
  return <div style={{display:"flex",flexDirection:"column",gap:3}}>
    {data.map(([k,v])=>{
      const pct=max>0?(v/max)*100:0;const hl=highlight===k;
      return <div key={k} onClick={()=>onClick?.(k)} style={{display:"flex",alignItems:"center",gap:8,cursor:onClick?"pointer":"default",padding:"5px 8px",borderRadius:8,background:hl?"rgba(255,255,255,0.1)":"transparent",transition:"all 0.15s"}}>
        <div style={{width:140,fontSize:12,color:hl?"#fff":"#94a3b8",fontWeight:hl?700:400,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}>{CL[k]||LL[k]||AL[k]||k.replace(/_/g," ")}</div>
        <div style={{flex:1,height:18,background:"rgba(255,255,255,0.05)",borderRadius:4,overflow:"hidden"}}>
          <div style={{width:`${pct}%`,height:"100%",background:hl?color:`${color}88`,borderRadius:4,transition:"width 0.3s"}}/>
        </div>
        <div style={{width:50,fontSize:12,fontWeight:600,color:hl?"#fff":"#94a3b8",textAlign:"right"}}>{v}{suffix}</div>
      </div>
    })}
  </div>
}

function Spark({data,color="#3b82f6"}) {
  if(!data||data.length<2) return null;
  const max=Math.max(...data,0.1);
  const pts=data.map((v,i)=>`${(i/(data.length-1))*100},${100-(v/max)*80}`).join(" ");
  return <svg viewBox="0 0 100 100" style={{width:"100%",height:50}} preserveAspectRatio="none">
    <polyline points={pts} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
}

function MonthBars({getData,color="#3b82f6"}) {
  const months=Object.keys(D.cat_monthly).filter(k=>k!=='_totals').sort();
  const vals=months.map(m=>getData(m));
  const max=Math.max(...vals,0.1);
  return <div style={{display:"flex",alignItems:"flex-end",gap:8,height:75}}>
    {months.map((m,i)=><div key={m} style={{flex:1,textAlign:"center"}}>
      <div style={{height:50,display:"flex",alignItems:"flex-end",justifyContent:"center"}}>
        <div style={{width:"100%",maxWidth:36,height:`${(vals[i]/max)*100}%`,background:i===months.length-1?color:`${color}88`,borderRadius:"4px 4px 0 0",minHeight:2}}/>
      </div>
      <div style={{fontSize:10,color:"#64748b",marginTop:3}}>{m.slice(5)}</div>
      <div style={{fontSize:12,fontWeight:700,color:"#fff"}}>{vals[i]}%</div>
    </div>)}
  </div>
}

function Insight({items}) {
  if(!items||!items.length) return null;
  const icons = ["💡","🔍","⚡","🎯","📊"];
  return <div style={{background:"linear-gradient(135deg,rgba(212,160,23,0.08),rgba(139,92,246,0.08))",borderRadius:14,border:"1px solid rgba(212,160,23,0.2)",padding:16,marginTop:12}}>
    <div style={{display:"flex",alignItems:"center",gap:6,marginBottom:10}}>
      <span style={{fontSize:16}}>🤖</span>
      <span style={{fontSize:12,fontWeight:700,color:"#d4a017",textTransform:"uppercase",letterSpacing:2}}>AI Pastoral Insights</span>
    </div>
    {items.map((item,i)=><div key={i} style={{display:"flex",gap:8,padding:"8px 10px",marginBottom:6,background:"rgba(0,0,0,0.15)",borderRadius:8,border:`1px solid ${item.type==="alert"?"rgba(239,68,68,0.25)":item.type==="positive"?"rgba(16,185,129,0.25)":"rgba(255,255,255,0.06)"}`}}>
      <span style={{fontSize:14,flexShrink:0}}>{item.type==="alert"?"⚠️":item.type==="positive"?"✅":icons[i%5]}</span>
      <p style={{fontSize:12,color:"#e2e8f0",margin:0,lineHeight:1.5}}>{item.text}</p>
    </div>)}
    <div style={{marginTop:10,padding:"12px 14px",background:"linear-gradient(135deg,rgba(139,92,246,0.12),rgba(59,130,246,0.12))",borderRadius:10,border:"1px solid rgba(139,92,246,0.25)"}}>
      <div style={{display:"flex",alignItems:"center",gap:8}}>
        <div style={{width:36,height:36,borderRadius:10,background:"linear-gradient(135deg,#8b5cf6,#3b82f6)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
          <span style={{fontSize:18}}>✍️</span>
        </div>
        <div style={{flex:1}}>
          <div style={{fontSize:12,fontWeight:700,color:"#c4b5fd"}}>Want to act on these insights?</div>
          <p style={{fontSize:11,color:"#94a3b8",margin:"2px 0 0"}}>Our <strong style={{color:"#c4b5fd"}}>Sermon & Content Studio</strong> module generates sermon outlines, small group curriculum, and social media content based on what your congregation actually needs — powered by your own teaching history.</p>
        </div>
      </div>
      <div style={{display:"flex",gap:8,marginTop:10,flexWrap:"wrap"}}>
        {[
          {icon:"📝",label:"AI sermon outlines from your data"},
          {icon:"🎯",label:"Targeted small group curriculum"},
          {icon:"📱",label:"Social media content from sermons"},
          {icon:"🔗",label:"Connects to your past sermons via CPP"},
        ].map((f,i)=><div key={i} style={{display:"flex",alignItems:"center",gap:4,fontSize:10,color:"#94a3b8",background:"rgba(0,0,0,0.2)",padding:"4px 8px",borderRadius:6}}>
          <span>{f.icon}</span><span>{f.label}</span>
        </div>)}
      </div>
      <button style={{marginTop:10,width:"100%",padding:"8px 16px",borderRadius:8,border:"none",background:"linear-gradient(135deg,#8b5cf6,#3b82f6)",color:"#fff",fontSize:12,fontWeight:700,cursor:"pointer",letterSpacing:0.5}}>
        Learn About the Sermon & Content Studio →
      </button>
    </div>
  </div>
}

function CmpBars({label,yours,peer,denom,region}) {
  const max=Math.max(yours,peer,denom,region,0.1);
  const bars=[{l:"Your Church",v:yours,c:"#f59e0b"},{l:"Similar Size",v:peer,c:"#3b82f6"},{l:"Same Denomination",v:denom,c:"#8b5cf6"},{l:"Same Region",v:region,c:"#10b981"}];
  return <div style={{marginBottom:14}}>
    <div style={{fontSize:13,fontWeight:700,color:"#fff",marginBottom:6}}>{CL[label]||LL[label]||label}</div>
    {bars.map(b=><div key={b.l} style={{display:"flex",alignItems:"center",gap:8,marginBottom:3}}>
      <div style={{width:120,fontSize:11,color:"#94a3b8"}}>{b.l}</div>
      <div style={{flex:1,height:14,background:"rgba(255,255,255,0.05)",borderRadius:4,overflow:"hidden"}}>
        <div style={{width:`${(b.v/max)*100}%`,height:"100%",background:b.c,borderRadius:4}}/>
      </div>
      <div style={{width:42,fontSize:11,fontWeight:600,color:b.c,textAlign:"right"}}>{b.v}%</div>
    </div>)}
  </div>
}

const card=(ch,border)=><div style={{background:"rgba(255,255,255,0.04)",borderRadius:14,border:`1px solid ${border||"rgba(255,255,255,0.08)"}`,padding:16}}>{ch}</div>;

export default function Dashboard() {
  const [view, setView] = useState("categories"); // categories, age, compare
  const [selCat, setSelCat] = useState(null);
  const [selLL, setSelLL] = useState(null);
  const [selAge, setSelAge] = useState(null);
  const [cmpLevel, setCmpLevel] = useState("cat"); // cat or ll
  const [cmpKey, setCmpKey] = useState("emotional");

  // Breadcrumb
  const crumbs = [];
  if(selCat) crumbs.push({label:CL[selCat], onClick:()=>{setSelCat(selCat);setSelLL(null)}});
  if(selLL) crumbs.push({label:LL[selLL]});

  // Category data sorted
  const catData = Object.entries(D.cat_pct).sort((a,b)=>b[1]-a[1]);
  const catMax = catData[0]?.[1]||1;

  // Lifelines within selected category
  const llData = selCat ? Object.entries(D.ll_by_cat[selCat]||{}).sort((a,b)=>b[1]-a[1]) : [];
  const llMax = llData[0]?.[1]||1;

  // Expressions within selected lifeline
  const exprData = selLL ? Object.entries(D.expr_pct[selLL]||{}).sort((a,b)=>b[1]-a[1]) : [];
  const exprMax = exprData[0]?.[1]||1;

  // Age breakdown for selected lifeline
  const llAgeData = selLL ? Object.entries(D.ll_age_pct[selLL]||{}).sort((a,b)=>b[1]-a[1]) : [];

  // Weekly sparkline for a key
  const weekSpark = (key, type="ll") => {
    const wks = Object.keys(type==="cat"?D.cat_weekly:D.ll_weekly).filter(k=>!k.startsWith('_')).sort();
    return wks.map(w => (type==="cat"?D.cat_weekly:D.ll_weekly)[w]?.[key]||0);
  };

  // Co-occurrence
  const coOcc = useMemo(()=>{
    if(!selLL||!selCat||!llAgeData.length) return null;
    const topAge = llAgeData[0]?.[0];
    if(!topAge) return null;
    const ageLLs = Object.entries(D.ll_by_age?.[selCat]?.[topAge]||{}).filter(([k])=>k!==selLL).sort((a,b)=>b[1]-a[1]).slice(0,5);
    return {age:topAge,lls:ageLLs};
  },[selLL,selCat,llAgeData]);

  // ─── AI INSIGHT GENERATORS ───
  const I = D.insights||{};

  const overviewInsights = useMemo(()=>{
    const items = [];
    const ov = I.overview||{};
    const ch = ov.changes||{};
    if(ov.fastest&&ov.fastest[1]>10) items.push({type:"alert",text:`${CL[ov.fastest[0]]} grew ${ov.fastest[1]}% month-over-month — the fastest-rising category. Consider whether your programming addresses this area.`});
    if(ov.biggest) items.push({type:"insight",text:`${CL[ov.biggest[0]]} represents ${ov.biggest[1]}% of all lifeline activity. This is your congregation's dominant area of need. Sermon series and small groups should prioritize this.`});
    const declining = Object.entries(ch).filter(([,v])=>v<-10).sort((a,b)=>a[1]-b[1]);
    if(declining.length) items.push({type:"positive",text:`${CL[declining[0][0]]} is down ${Math.abs(declining[0][1])}% month-over-month. Your ministry in this area may be having a positive effect.`});
    if(ov.smallest) items.push({type:"insight",text:`${CL[ov.smallest[0]]} is only ${ov.smallest[1]}% of activity. This could mean low need — or it could mean stigma is preventing people from seeking help. Consider normalizing these topics from the pulpit.`});
    return items;
  },[]);

  const catInsights = useMemo(()=>{
    if(!selCat) return [];
    const ci = I.by_cat?.[selCat]||{};
    const items = [];
    if(ci.fastest&&ci.fastest[1]>15) items.push({type:"alert",text:`${LL[ci.fastest[0]]} is surging — up ${ci.fastest[1]}% month-over-month within ${CL[selCat]}. This needs pastoral attention now.`});
    if(ci.declining&&ci.declining[1]<-15) items.push({type:"positive",text:`${LL[ci.declining[0]]} is declining (${ci.declining[1]}%). People may be finding resolution through your current programming.`});
    if(ci.top3?.length>=2) {
      const dom = ci.age_dominant||{};
      const top1 = ci.top3[0][0];
      const top1_age = dom[top1];
      if(top1_age) items.push({type:"insight",text:`${LL[top1]} is the #1 lifeline here, and ${top1_age[1]}% of those taps come from ${AL[top1_age[0]]}. Your outreach to this group in this area could have outsized impact.`});
    }
    return items;
  },[selCat]);

  const llInsights = useMemo(()=>{
    if(!selLL) return [];
    const li = I.by_ll?.[selLL]||{};
    const items = [];
    if(li.top_age) items.push({type:"insight",text:`${AL[li.top_age[0]]} account for ${li.top_age[1]}% of ${LL[selLL]} taps. This is the group most in need of support in this area.`});
    if(li.top_expr) items.push({type:"insight",text:`The most common expression is "${li.top_expr[0].replace(/_/g," ")}" at ${li.top_expr[1]}%. This tells you specifically what aspect of ${LL[selLL]} people are dealing with.`});
    if(li.vs_peers>15) items.push({type:"alert",text:`Your church is ${li.vs_peers}% higher than similar-sized peers for ${LL[selLL]}. This is an outlier — consider a dedicated sermon or program.`});
    else if(li.vs_peers<-15) items.push({type:"positive",text:`Your church is ${Math.abs(li.vs_peers)}% lower than peers for ${LL[selLL]}. Your ministry in this area is outperforming similar churches.`});
    if(coOcc?.lls?.length>0) items.push({type:"alert",text:`People experiencing ${LL[selLL]} are also tapping ${LL[coOcc.lls[0][0]]} and ${coOcc.lls.length>1?LL[coOcc.lls[1][0]]:"other lifelines"}. These connected struggles suggest a deeper root issue worth exploring in counseling or teaching.`});
    return items;
  },[selLL,coOcc]);

  const ageInsights = useMemo(()=>{
    if(!selAge) return [];
    const ai = I.by_age?.[selAge]||{};
    const items = [];
    if(ai.top_cat) items.push({type:"insight",text:`${CL[ai.top_cat[0]]} dominates at ${ai.top_cat[1]}% of this age group's activity. Programming for ${AL[selAge]} should lead with this category.`});
    if(ai.top_lls?.length>=2) items.push({type:"alert",text:`Top lifelines: ${ai.top_lls.map(([ll,p])=>`${LL[ll]} (${p}%)`).join(", ")}. These three areas represent the most pressing needs for your ${AL[selAge]?.split("(")[0]} congregation.`});
    // Generic age-specific pastoral guidance
    const guides = {
      teens: "Teens often won't vocalize struggles — high lifeline usage here is a signal to equip youth leaders and parents, not just preach.",
      university: "University-age members are forming their adult identity. High stress here often masks deeper questions about purpose and belonging.",
      young_adult: "Young Adults juggle career, relationships, and possibly new families. They need practical, not just theological, support.",
      adult: "Adults in this stage often carry hidden burdens — caregiving, career plateaus, marriage fatigue. They rarely ask for help.",
      senior: "Seniors facing grief and health challenges often isolate. High lifeline usage here suggests they're reaching out — which is a positive sign. Make sure there are in-person touchpoints too."
    };
    if(guides[selAge]) items.push({type:"insight",text:guides[selAge]});
    return items;
  },[selAge]);

  // Age view: category breakdown per age
  const ageData = selAge ? Object.entries(D.cat_by_age[selAge]||{}).filter(([k])=>k!=='_totals').sort((a,b)=>b[1]-a[1]) : [];

  const nav=(l,v)=><button onClick={()=>{setView(v);setSelCat(null);setSelLL(null);setSelAge(null)}} style={{padding:"7px 16px",borderRadius:8,border:"none",background:view===v?"#f59e0b":"rgba(255,255,255,0.08)",color:view===v?"#1a1a2e":"#94a3b8",fontWeight:700,fontSize:12,cursor:"pointer"}}>{l}</button>;

  return <div style={{minHeight:"100vh",background:"linear-gradient(160deg,#0a1628,#111827,#0f172a)",color:"#e2e8f0",fontFamily:"'Segoe UI',system-ui,sans-serif"}}>
    <div style={{maxWidth:960,margin:"0 auto",padding:"20px 16px"}}>

      <div style={{textAlign:"center",marginBottom:16}}>
        <div style={{fontSize:10,fontWeight:700,letterSpacing:3,color:"#d4a017",textTransform:"uppercase"}}>Life Stages AI · Pastoral Analytics</div>
        <h1 style={{fontSize:22,fontWeight:800,margin:"4px 0",color:"#fff"}}>{D.church.name}</h1>
        <p style={{color:"#64748b",fontSize:11,margin:0}}>{D.church.denomination} · {D.church.region} · {D.church.size.toLocaleString()} members · {D.church.total_events.toLocaleString()} lifeline engagements (90 days)</p>
      </div>

      <div style={{display:"flex",gap:6,justifyContent:"center",marginBottom:16,flexWrap:"wrap"}}>
        {nav("Categories","categories")}
        {nav("By Age Group","age")}
        {nav("Compare to Peers","compare")}
      </div>

      {/* Breadcrumb */}
      {(selCat||selLL)&&view==="categories"&&<div style={{display:"flex",gap:4,alignItems:"center",marginBottom:12,fontSize:12}}>
        <span style={{color:"#64748b",cursor:"pointer"}} onClick={()=>{setSelCat(null);setSelLL(null)}}>All Categories</span>
        {selCat&&<><span style={{color:"#64748b"}}>›</span><span style={{color:selLL?"#64748b":"#f59e0b",cursor:selLL?"pointer":"default",fontWeight:selLL?400:700}} onClick={()=>setSelLL(null)}>{CL[selCat]}</span></>}
        {selLL&&<><span style={{color:"#64748b"}}>›</span><span style={{color:"#f59e0b",fontWeight:700}}>{LL[selLL]}</span></>}
      </div>}

      {/* ═══ CATEGORIES VIEW ═══ */}
      {view==="categories"&&<>
        {/* Level 1: Categories */}
        {!selCat&&<div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14}}>
          <div>
            {card(<>
              <h3 style={{margin:"0 0 2px",fontSize:14,fontWeight:700,color:"#fff"}}>Lifeline Categories</h3>
              <p style={{fontSize:10,color:"#64748b",margin:"0 0 2px"}}>Click a category to see its lifelines</p>
              <div style={{display:"inline-block",padding:"2px 8px",borderRadius:4,background:"rgba(245,158,11,0.15)",border:"1px solid rgba(245,158,11,0.3)",marginBottom:10}}>
                <span style={{fontSize:10,fontWeight:700,color:"#f59e0b"}}>90-DAY AVERAGE</span>
              </div>
              {catData.map(([cat,pct])=>{
                const color=CC[cat];
                return <div key={cat} onClick={()=>setSelCat(cat)} style={{display:"flex",alignItems:"center",gap:10,padding:"10px 12px",marginBottom:6,borderRadius:10,background:"rgba(255,255,255,0.04)",border:`1px solid ${color}33`,cursor:"pointer",transition:"all 0.15s"}}>
                  <div style={{width:6,height:36,borderRadius:3,background:color}}/>
                  <div style={{flex:1}}>
                    <div style={{fontSize:13,fontWeight:700,color:"#fff"}}>{CL[cat]}</div>
                    <div style={{fontSize:11,color:"#64748b"}}>{(D.cat_map[cat]||[]).length} lifelines</div>
                  </div>
                  <div style={{fontSize:20,fontWeight:800,color}}>{pct}%</div>
                  <span style={{color:"#64748b",fontSize:16}}>›</span>
                </div>
              })}
            </>)}
          </div>
          <div style={{display:"flex",flexDirection:"column",gap:14}}>
            {card(<>
              <h4 style={{margin:"0 0 2px",fontSize:13,color:"#94a3b8"}}>Weekly Trend by Category</h4>
              <div style={{display:"inline-block",padding:"2px 8px",borderRadius:4,background:"rgba(59,130,246,0.15)",border:"1px solid rgba(59,130,246,0.3)",marginBottom:8}}>
                <span style={{fontSize:10,fontWeight:700,color:"#60a5fa"}}>CURRENT MONTH %</span>
              </div>
              <p style={{fontSize:9,color:"#64748b",margin:"0 0 8px"}}>The % shown is this month's share — it may differ from the 90-day average on the left as trends shift month to month.</p>
              {CATS.map(cat=>{
                const months=Object.keys(D.cat_monthly).filter(k=>k!=='_totals').sort();
                const vals=months.map(m=>D.cat_monthly[m]?.[cat]||0);
                return <div key={cat} style={{marginBottom:8}}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:2}}>
                    <span style={{fontSize:11,fontWeight:600,color:CC[cat]}}>{CL[cat]}</span>
                    <span style={{fontSize:10,color:"#64748b"}}>{vals[vals.length-1]}%</span>
                  </div>
                  <Spark data={weekSpark(cat,"cat")} color={CC[cat]}/>
                </div>
              })}
            </>)}
            <Insight items={overviewInsights}/>
          </div>
        </div>}

        {/* Level 2: Lifelines within category */}
        {selCat&&!selLL&&<div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14}}>
          {card(<>
            <h3 style={{margin:"0 0 2px",fontSize:14,fontWeight:700,color:CC[selCat]}}>{CL[selCat]}</h3>
            <p style={{fontSize:10,color:"#64748b",margin:"0 0 10px"}}>% of taps within this category. Click a lifeline to drill deeper.</p>
            <Bar data={llData} max={llMax} color={CC[selCat]} onClick={ll=>setSelLL(ll)} highlight={selLL}/>
          </>,`${CC[selCat]}44`)}

          <div style={{display:"flex",flexDirection:"column",gap:12}}>
            {card(<>
              <h4 style={{margin:"0 0 8px",fontSize:13,color:"#94a3b8"}}>Category Trend — Monthly %</h4>
              <MonthBars getData={m=>D.cat_monthly[m]?.[selCat]||0} color={CC[selCat]}/>
            </>)}
            {card(<>
              <h4 style={{margin:"0 0 8px",fontSize:13,color:"#94a3b8"}}>By Age Group (% of this category)</h4>
              {AGES.map(age=>{
                const pct=D.cat_by_age[age]?.[selCat]||0;
                const max=50;
                return <div key={age} style={{display:"flex",alignItems:"center",gap:8,marginBottom:4}}>
                  <div style={{width:100,fontSize:11,color:"#94a3b8"}}>{AL[age]?.split("(")[0]}</div>
                  <div style={{flex:1,height:14,background:"rgba(255,255,255,0.05)",borderRadius:4,overflow:"hidden"}}>
                    <div style={{width:`${(pct/max)*100}%`,height:"100%",background:CC[selCat],borderRadius:4}}/>
                  </div>
                  <div style={{width:35,fontSize:11,fontWeight:600,color:"#94a3b8",textAlign:"right"}}>{pct}%</div>
                </div>
              })}
            </>)}
            <Insight items={catInsights}/>
          </div>
        </div>}

        {/* Level 3: Lifeline deep dive */}
        {selLL&&<div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14}}>
          <div style={{display:"flex",flexDirection:"column",gap:12}}>
            {card(<>
              <h3 style={{margin:"0 0 8px",fontSize:15,fontWeight:700,color:"#f59e0b"}}>{LL[selLL]}</h3>
              <p style={{fontSize:11,color:"#94a3b8",margin:"0 0 8px"}}>Weekly trend (% of all taps that week)</p>
              <Spark data={weekSpark(selLL)} color="#f59e0b"/>
              <p style={{fontSize:11,color:"#94a3b8",margin:"12px 0 8px"}}>Monthly trend</p>
              <MonthBars getData={m=>{
                const t=D.ll_monthly_totals?.[m]||1;
                const c=D.ll_monthly[m]?.[selLL]||0;
                return +(c/t*100).toFixed(1);
              }} color="#f59e0b"/>
            </>,"rgba(245,158,11,0.25)")}

            {card(<>
              <h4 style={{margin:"0 0 8px",fontSize:13,color:"#94a3b8"}}>Who is experiencing this? (% of this lifeline)</h4>
              <Bar data={llAgeData} max={llAgeData[0]?.[1]||1} color="#8b5cf6" onClick={age=>{setSelAge(age);setView("age")}}/>
            </>)}
          </div>

          <div style={{display:"flex",flexDirection:"column",gap:12}}>
            {card(<>
              <h4 style={{margin:"0 0 8px",fontSize:13,color:"#94a3b8"}}>Specific Expressions (% within {LL[selLL]})</h4>
              <Bar data={exprData} max={exprMax} color="#10b981"/>
            </>)}

            {coOcc?.lls?.length>0&&card(<>
              <h4 style={{margin:"0 0 2px",fontSize:13,color:"#ef4444"}}>🔗 Also Experiencing ({AL[coOcc.age]?.split("(")[0]})</h4>
              <p style={{fontSize:10,color:"#94a3b8",margin:"0 0 8px"}}>People in this age group who tap {LL[selLL]} also tap:</p>
              <Bar data={coOcc.lls} max={coOcc.lls[0]?.[1]||1} color="#ef4444" onClick={ll=>{setSelLL(ll)}}/>
            </>,"rgba(239,68,68,0.25)")}

            {card(<>
              <h4 style={{margin:"0 0 8px",fontSize:13,color:"#94a3b8"}}>Peer Comparison</h4>
              <CmpBars label={selLL} yours={D.comparison.ll.yours[selLL]||0} peer={D.comparison.ll.size[selLL]||0} denom={D.comparison.ll.denom[selLL]||0} region={D.comparison.ll.region[selLL]||0}/>
            </>)}
            <Insight items={llInsights}/>
          </div>
        </div>}
      </>}

      {/* ═══ AGE VIEW ═══ */}
      {view==="age"&&<>
        <div style={{display:"grid",gridTemplateColumns:selAge?"1fr 1fr":"1fr",gap:14}}>
          {card(<>
            <h3 style={{margin:"0 0 2px",fontSize:14,fontWeight:700,color:"#fff"}}>Age Groups — % of All Taps</h3>
            <p style={{fontSize:10,color:"#64748b",margin:"0 0 10px"}}>Click an age group to see their category & lifeline breakdown</p>
            {AGES.map(age=>{
              const t=D.cat_by_age._totals||{};
              const total=Object.values(t).reduce((s,v)=>s+v,0);
              const pct=+(t[age]/total*100).toFixed(1);
              const hl=selAge===age;
              return <div key={age} onClick={()=>setSelAge(age===selAge?null:age)} style={{display:"flex",alignItems:"center",gap:10,padding:"10px 12px",marginBottom:6,borderRadius:10,background:hl?"rgba(139,92,246,0.15)":"rgba(255,255,255,0.04)",border:hl?"1px solid rgba(139,92,246,0.4)":"1px solid rgba(255,255,255,0.06)",cursor:"pointer"}}>
                <div style={{flex:1}}>
                  <div style={{fontSize:13,fontWeight:700,color:hl?"#fff":"#94a3b8"}}>{AL[age]}</div>
                </div>
                <div style={{fontSize:18,fontWeight:800,color:hl?"#8b5cf6":"#64748b"}}>{pct}%</div>
                <span style={{color:"#64748b"}}>›</span>
              </div>
            })}
          </>)}

          {selAge&&<div style={{display:"flex",flexDirection:"column",gap:12}}>
            {card(<>
              <h3 style={{margin:"0 0 2px",fontSize:15,fontWeight:700,color:"#8b5cf6"}}>{AL[selAge]}</h3>
              <p style={{fontSize:10,color:"#64748b",margin:"0 0 10px"}}>Category breakdown (% of this age group's taps)</p>
              {ageData.map(([cat,pct])=><div key={cat} onClick={()=>{setSelCat(cat);setView("categories")}} style={{display:"flex",alignItems:"center",gap:10,padding:"8px 12px",marginBottom:4,borderRadius:8,background:"rgba(255,255,255,0.04)",border:`1px solid ${CC[cat]}33`,cursor:"pointer"}}>
                <div style={{width:5,height:28,borderRadius:3,background:CC[cat]}}/>
                <div style={{flex:1,fontSize:12,fontWeight:600,color:"#fff"}}>{CL[cat]}</div>
                <div style={{fontSize:14,fontWeight:700,color:CC[cat]}}>{pct}%</div>
              </div>)}
            </>,"rgba(139,92,246,0.25)")}

            {card(<>
              <h4 style={{margin:"0 0 8px",fontSize:13,color:"#94a3b8"}}>Top Lifelines for {AL[selAge]?.split("(")[0]}</h4>
              {CATS.map(cat=>{
                const lls=Object.entries(D.ll_by_age?.[cat]?.[selAge]||{}).sort((a,b)=>b[1]-a[1]).slice(0,3);
                if(!lls.length) return null;
                return <div key={cat} style={{marginBottom:10}}>
                  <div style={{fontSize:11,fontWeight:700,color:CC[cat],marginBottom:4}}>{CL[cat]}</div>
                  {lls.map(([ll,pct],i)=><div key={ll} style={{fontSize:11,color:i===0?"#fff":"#94a3b8",padding:"1px 0",cursor:"pointer"}} onClick={()=>{setSelCat(cat);setSelLL(ll);setView("categories")}}>
                    {i+1}. {LL[ll]} — {pct}%
                  </div>)}
                </div>
              })}
            </>)}
            <Insight items={ageInsights}/>
          </div>}
        </div>
      </>}

      {/* ═══ COMPARE VIEW ═══ */}
      {view==="compare"&&<>
        <div style={{display:"flex",gap:6,marginBottom:14}}>
          <button onClick={()=>setCmpLevel("cat")} style={{padding:"6px 14px",borderRadius:6,border:"none",background:cmpLevel==="cat"?"#f59e0b":"rgba(255,255,255,0.08)",color:cmpLevel==="cat"?"#1a1a2e":"#94a3b8",fontWeight:700,fontSize:12,cursor:"pointer"}}>By Category</button>
          <button onClick={()=>setCmpLevel("ll")} style={{padding:"6px 14px",borderRadius:6,border:"none",background:cmpLevel==="ll"?"#f59e0b":"rgba(255,255,255,0.08)",color:cmpLevel==="ll"?"#1a1a2e":"#94a3b8",fontWeight:700,fontSize:12,cursor:"pointer"}}>By Lifeline</button>
        </div>

        {cmpLevel==="cat"&&card(<>
          <h3 style={{margin:"0 0 12px",fontSize:14,fontWeight:700,color:"#fff"}}>Category Comparison — Your Church vs. Peers</h3>
          {CATS.map(cat=><CmpBars key={cat} label={cat} yours={D.comparison.cat.yours[cat]||0} peer={D.comparison.cat.size[cat]||0} denom={D.comparison.cat.denom[cat]||0} region={D.comparison.cat.region[cat]||0}/>)}
        </>,"rgba(245,158,11,0.15)")}

        {cmpLevel==="ll"&&<>
          {card(<>
            <h3 style={{margin:"0 0 2px",fontSize:14,fontWeight:700,color:"#fff"}}>Lifeline Comparison — Click to Select</h3>
            <p style={{fontSize:10,color:"#64748b",margin:"0 0 12px"}}>Your rates vs. similar size, same denomination, same region</p>
            <div style={{display:"flex",flexWrap:"wrap",gap:4,marginBottom:14}}>
              {Object.entries(D.comparison.ll.yours).sort((a,b)=>b[1]-a[1]).slice(0,15).map(([ll])=><button key={ll} onClick={()=>setCmpKey(ll)} style={{padding:"3px 8px",borderRadius:5,border:"none",background:cmpKey===ll?"#f59e0b":"rgba(255,255,255,0.08)",color:cmpKey===ll?"#1a1a2e":"#94a3b8",fontSize:10,fontWeight:600,cursor:"pointer"}}>{LL[ll]?.split("&")[0]}</button>)}
            </div>
            <CmpBars label={cmpKey} yours={D.comparison.ll.yours[cmpKey]||0} peer={D.comparison.ll.size[cmpKey]||0} denom={D.comparison.ll.denom[cmpKey]||0} region={D.comparison.ll.region[cmpKey]||0}/>
            {(()=>{
              const y=D.comparison.ll.yours[cmpKey]||0,p=D.comparison.ll.size[cmpKey]||0;
              const diff=p>0?((y-p)/p*100).toFixed(0):"0";const hi=y>p;
              return <div style={{padding:10,borderRadius:8,background:hi?"rgba(239,68,68,0.08)":"rgba(16,185,129,0.08)",border:`1px solid ${hi?"rgba(239,68,68,0.2)":"rgba(16,185,129,0.2)"}`,marginTop:8}}>
                <p style={{fontSize:12,color:"#fff",margin:0}}>{hi?`⚠️ ${diff}% higher than similar-sized peers. Consider pastoral attention.`:`✅ ${Math.abs(+diff)}% lower than peers. Your ministry here appears effective.`}</p>
              </div>
            })()}
          </>,"rgba(245,158,11,0.15)")}

          <div style={{marginTop:14}}>
            {card(<>
              <h3 style={{margin:"0 0 8px",fontSize:14,fontWeight:700,color:"#fff"}}>Full Table (% of total taps)</h3>
              <div style={{overflowX:"auto"}}>
                <table style={{width:"100%",borderCollapse:"collapse",fontSize:11}}>
                  <thead><tr>{["Lifeline","Yours","Peers","Denom","Region","vs Peers"].map(h=><th key={h} style={{padding:"6px 4px",textAlign:"left",color:"#64748b",borderBottom:"1px solid rgba(255,255,255,0.08)",fontWeight:600}}>{h}</th>)}</tr></thead>
                  <tbody>{Object.entries(D.comparison.ll.yours).sort((a,b)=>b[1]-a[1]).map(([ll,y],i)=>{
                    const p=D.comparison.ll.size[ll]||0;const diff=p>0?((y-p)/p*100).toFixed(0):"0";const hi=y>p;
                    return <tr key={ll} style={{background:i%2?"rgba(255,255,255,0.02)":"transparent",cursor:"pointer"}} onClick={()=>{setCmpKey(ll)}}>
                      <td style={{padding:"4px",color:cmpKey===ll?"#f59e0b":"#e2e8f0",fontWeight:cmpKey===ll?700:400}}>{LL[ll]?.split("&")[0]}</td>
                      <td style={{padding:"4px",color:"#f59e0b",fontWeight:600}}>{y}%</td>
                      <td style={{padding:"4px",color:"#3b82f6"}}>{p}%</td>
                      <td style={{padding:"4px",color:"#8b5cf6"}}>{(D.comparison.ll.denom[ll]||0)}%</td>
                      <td style={{padding:"4px",color:"#10b981"}}>{(D.comparison.ll.region[ll]||0)}%</td>
                      <td style={{padding:"4px",color:hi?"#ef4444":"#10b981",fontWeight:600}}>{hi?"▲":"▼"}{Math.abs(+diff)}%</td>
                    </tr>
                  })}</tbody>
                </table>
              </div>
            </>)}
          </div>
        </>}
      </>}
    </div>
  </div>
}
