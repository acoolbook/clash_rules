module.exports.parse = async (raw, { axios, yaml, notify, console }, { name, url, interval, selected }) => {
    var obj = yaml.parse(raw)
    var first_name=obj['proxy-groups'][0]['name']

    var rules=["PROCESS-NAME,v2ray,DIRECT",
    "PROCESS-NAME,xray,DIRECT",
    "PROCESS-NAME,naive,DIRECT",
    "PROCESS-NAME,trojan,DIRECT",
    "PROCESS-NAME,trojan-go,DIRECT",
    "PROCESS-NAME,ss-local,DIRECT",
    "PROCESS-NAME,privoxy,DIRECT",
    "PROCESS-NAME,leaf,DIRECT",
    "PROCESS-NAME,v2ray.exe,DIRECT",
    "PROCESS-NAME,xray.exe,DIRECT",
    "PROCESS-NAME,naive.exe,DIRECT",
    "PROCESS-NAME,trojan.exe,DIRECT",
    "PROCESS-NAME,trojan-go.exe,DIRECT",
    "PROCESS-NAME,ss-local.exe,DIRECT",
    "PROCESS-NAME,privoxy.exe,DIRECT",
    "PROCESS-NAME,leaf.exe,DIRECT",
    "PROCESS-NAME,Surge,DIRECT",
    "PROCESS-NAME,Surge 2,DIRECT",
    "PROCESS-NAME,Surge 3,DIRECT",
    "PROCESS-NAME,Surge 4,DIRECT",
    "PROCESS-NAME,Surge%202,DIRECT",
    "PROCESS-NAME,Surge%203,DIRECT",
    "PROCESS-NAME,Surge%204,DIRECT",
    "PROCESS-NAME,Thunder,DIRECT",
    "PROCESS-NAME,DownloadService,DIRECT",
    "PROCESS-NAME,qBittorrent,DIRECT",
    "PROCESS-NAME,Transmission,DIRECT",
    "PROCESS-NAME,fdm,DIRECT",
    "PROCESS-NAME,aria2c,DIRECT",
    "PROCESS-NAME,Folx,DIRECT",
    "PROCESS-NAME,NetTransport,DIRECT",
    "PROCESS-NAME,uTorrent,DIRECT",
    "PROCESS-NAME,WebTorrent,DIRECT",
    "PROCESS-NAME,aria2c.exe,DIRECT",
    "PROCESS-NAME,BitComet.exe,DIRECT",
    "PROCESS-NAME,fdm.exe,DIRECT",
    "PROCESS-NAME,NetTransport.exe,DIRECT",
    "PROCESS-NAME,qbittorrent.exe,DIRECT",
    "PROCESS-NAME,Thunder.exe,DIRECT",
    "PROCESS-NAME,ThunderVIP.exe,DIRECT",
    "PROCESS-NAME,transmission-daemon.exe,DIRECT",
    "PROCESS-NAME,transmission-qt.exe,DIRECT",
    "PROCESS-NAME,uTorrent.exe,DIRECT",
    "PROCESS-NAME,WebTorrent.exe,DIRECT",
    "DOMAIN,clash.razord.top,DIRECT",
    "DOMAIN,yacd.haishan.me,DIRECT",
    "RULE-SET,private,DIRECT",
    "RULE-SET,direct,DIRECT",
    "RULE-SET,icloud,DIRECT",
    "RULE-SET,apple,DIRECT",
    "RULE-SET,google,DIRECT",
    "RULE-SET,reject,REJECT",
    "RULE-SET,proxy,"+first_name,
    "RULE-SET,telegramcidr,"+first_name,
    "MATCH,DIRECT"]
    
    obj['rules']=rules

    var str_obj=yaml.stringify(obj)
    
    var rule_providers=`rule-providers:
    reject:
      type: http
      behavior: domain
      url: https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/reject.txt
      path: ./ruleset/reject.yaml
      interval: 86400
    icloud:
      type: http
      behavior: domain
      url: https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/icloud.txt
      path: ./ruleset/icloud.yaml
      interval: 86400
    apple:
      type: http
      behavior: domain
      url: https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/apple.txt
      path: ./ruleset/apple.yaml
      interval: 86400
    google:
      type: http
      behavior: domain
      url: https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/google.txt
      path: ./ruleset/google.yaml
      interval: 86400
    proxy:
      type: http
      behavior: domain
      url: https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/proxy.txt
      path: ./ruleset/proxy.yaml
      interval: 86400
    direct:
      type: http
      behavior: domain
      url: https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/direct.txt
      path: ./ruleset/direct.yaml
      interval: 86400
    private:
      type: http
      behavior: domain
      url: https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/private.txt
      path: ./ruleset/private.yaml
      interval: 86400
    gfw:
      type: http
      behavior: domain
      url: https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/gfw.txt
      path: ./ruleset/gfw.yaml
      interval: 86400
    greatfire:
      type: http
      behavior: domain
      url: https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/greatfire.txt
      path: ./ruleset/greatfire.yaml
      interval: 86400
    tld-not-cn:
      type: http
      behavior: domain
      url: https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/tld-not-cn.txt
      path: ./ruleset/tld-not-cn.yaml
      interval: 86400
    telegramcidr:
      type: http
      behavior: ipcidr
      url: https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/telegramcidr.txt
      path: ./ruleset/telegramcidr.yaml
      interval: 86400
    cncidr:
      type: http
      behavior: ipcidr
      url: https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/cncidr.txt
      path: ./ruleset/cncidr.yaml
      interval: 86400
    lancidr:
      type: http
      behavior: ipcidr
      url: https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/lancidr.txt
      path: ./ruleset/lancidr.yaml
      interval: 86400`
      str_obj+=rule_providers
    return str_obj
  }
