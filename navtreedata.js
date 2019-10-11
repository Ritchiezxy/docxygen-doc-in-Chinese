/*
@licstart  The following is the entire license notice for the
JavaScript code in this file.

Copyright (C) 1997-2019 by Dimitri van Heesch

This program is free software; you can redistribute it and/or modify
it under the terms of version 2 of the GNU General Public License as published by
the Free Software Foundation

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License along
with this program; if not, write to the Free Software Foundation, Inc.,
51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.

@licend  The above is the entire license notice
for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "Doxygen", "index.html", [
    [ "安装", "install.html", [
      [ "在UNIX上从源代码编译", "install.html#install_src_unix", null ],
      [ "在UNIX上安装二进制文件", "install.html#install_bin_unix", null ],
      [ "在Windows上从源代码编译", "install.html#install_src_windows", null ],
      [ "在Windows上安装二进制文件", "install.html#install_bin_windows", null ]
    ] ],
    [ "入门", "starting.html", [
      [ "步骤 0: 检查doxygen是否支持您的编程语言", "starting.html#step0", null ],
      [ "步骤 1: 创建配置文件", "starting.html#step1", null ],
      [ "步骤 2: 运行doxygen", "starting.html#step2", [
        [ "HTML 输出", "starting.html#html_out", null ],
        [ "LaTeX 输出", "starting.html#latex_out", null ],
        [ "RTF 输出", "starting.html#rtf_out", null ],
        [ "XML 输出", "starting.html#xml_out", null ],
        [ "Man page 输出", "starting.html#man_out", null ],
        [ "DocBook 输出", "starting.html#docbook_out", null ]
      ] ],
      [ "步骤 3: 为源文件生成文档", "starting.html#step3", null ]
    ] ],
    [ "为代码写用于生成文档的注释", "docblocks.html", [
      [ "特殊注释块", "docblocks.html#specialblock", [
        [ "类C语言的注释块(C/C++/C#/Objective-C/PHP/Java)", "docblocks.html#cppblock", [
          [ "将文档放在成员之后", "docblocks.html#memberdoc", null ],
          [ "案例", "docblocks.html#docexamples", null ],
          [ "其他地方的文档", "docblocks.html#structuralcommands", null ]
        ] ],
        [ "Python中的注释块", "docblocks.html#pythonblocks", null ],
        [ "VHDL中的注释块", "docblocks.html#vhdlblocks", null ],
        [ "Fortran中的注释块", "docblocks.html#fortranblocks", null ],
        [ "Tcl中的注释块", "docblocks.html#tclblocks", null ]
      ] ],
      [ "注释块的剖析", "docblocks.html#docstructure", null ]
    ] ],
    [ "Markdown 支持", "markdown.html", [
      [ "标准Markdown", "markdown.html#markdown_std", [
        [ "段落", "markdown.html#md_para", null ],
        [ "头", "markdown.html#md_headers", null ],
        [ "块引用", "markdown.html#md_blockquotes", null ],
        [ "列表", "markdown.html#md_lists", null ],
        [ "代码块", "markdown.html#md_codeblock", null ],
        [ "水平标尺", "markdown.html#md_rulers", null ],
        [ "强调", "markdown.html#md_emphasis", null ],
        [ "删除线", "markdown.html#md_strikethrough", null ],
        [ "代码范围", "markdown.html#md_codespan", null ],
        [ "链接", "markdown.html#md_links", [
          [ "内部链接", "markdown.html#md_inlinelinks", null ],
          [ "引用链接", "markdown.html#md_reflinks", null ]
        ] ],
        [ "图片", "markdown.html#md_images", null ],
        [ "自动连接", "markdown.html#md_autolink", null ]
      ] ],
      [ "Markdown扩展", "markdown.html#markdown_extra", [
        [ "内容列表", "markdown.html#md_toc", null ],
        [ "表格", "markdown.html#md_tables", null ],
        [ "栅栏式代码块", "markdown.html#md_fenced", null ],
        [ "头Id属性", "markdown.html#md_header_id", null ]
      ] ],
      [ "Doxygen特性", "markdown.html#markdown_dox", [
        [ "包含Markdown文件作为页面", "markdown.html#md_page_header", null ],
        [ "HTML块的处理", "markdown.html#md_html_blocks", null ],
        [ "代码块缩进", "markdown.html#mddox_code_blocks", null ],
        [ "强调和删除线限制", "markdown.html#mddox_emph_spans", null ],
        [ "代码范围限制", "markdown.html#mddox_code_spans", null ],
        [ "列表的扩展", "markdown.html#mddox_lists", null ],
        [ "使用星号", "markdown.html#mddox_stars", null ],
        [ "标记范围的限制", "markdown.html#mddox_limits", null ]
      ] ],
      [ "调试的问题", "markdown.html#markdown_debug", null ]
    ] ],
    [ "列表", "lists.html", null ],
    [ "组织", "grouping.html", [
      [ "模块", "grouping.html#modules", null ],
      [ "成员组", "grouping.html#memgroup", null ],
      [ "子页面", "grouping.html#subpaging", null ]
    ] ],
    [ "包含公式", "formulas.html", null ],
    [ "包含表格", "tables.html", null ],
    [ "图形和图表", "diagrams.html", null ],
    [ "预处理", "preprocessing.html", null ],
    [ "自动生成的链接", "autolink.html", [
      [ "指向网页和邮件地址的链接", "autolink.html#linkurl", null ],
      [ "链接到类", "autolink.html#linkclass", null ],
      [ "链接到文件", "autolink.html#linkfile", null ],
      [ "链接到函数", "autolink.html#linkfunc", null ],
      [ "链接到其他成员", "autolink.html#linkother", null ],
      [ "typedefs", "autolink.html#resolving", null ]
    ] ],
    [ "输出格式", "output.html", null ],
    [ "搜索", "searching.html", "searching" ],
    [ "自定义输出", "customize.html", [
      [ "轻微的调整", "customize.html#minor_tweaks", [
        [ "整体的颜色", "customize.html#minor_tweaks_colors", null ],
        [ "导航", "customize.html#minor_tweaks_treeview", null ],
        [ "动态内容", "customize.html#minor_tweaks_dynsection", null ],
        [ "页眉、页脚和样式表更改", "customize.html#minor_tweaks_header_css", null ]
      ] ],
      [ "更改页面布局", "customize.html#layout", null ],
      [ "使用XML输出", "customize.html#xmlgenerator", null ]
    ] ],
    [ "自定义命令", "custcmd.html", [
      [ "简单的别名", "custcmd.html#custcmd_simple", null ],
      [ "有参数的别名", "custcmd.html#custcmd_complex", null ],
      [ "嵌套自定义命令", "custcmd.html#custcmd_nesting", null ]
    ] ],
    [ "链接到外部文档", "external.html", null ],
    [ "常见问题", "faq.html", [
      [ "如何在HTML的索引页上获取信息?", "faq.html#faq_index", null ],
      [ "帮助，我的类/文件/名称空间的一些/所有成员没有文档化?", "faq.html#fac_al", null ],
      [ "当我将EXTRACT_ALL设置为NO时，文档中没有显示我的函数。", "faq.html#faq_extract_all", null ],
      [ "带有自定义扩展名的文件不再(正确)解析。", "faq.html#faq_ext_mapping", null ],
      [ "如何让doxygen忽略一些代码片段?", "faq.html#faq_code", null ],
      [ "如何更改类文档中#include之后的内容?", "faq.html#faq_code_inc", null ],
      [ "如何结合使用标签文件与压缩HTML?", "faq.html#faq_chm", null ],
      [ "我不喜欢放在每个HTML页面上面的快速索引，我该怎么办?", "faq.html#faq_html", null ],
      [ "整个HTML输出看起来不同，而我只想使用我自己的HTML头文件", "faq.html#faq_html_header", null ],
      [ "为什么doxygen使用Qt?", "faq.html#faq_use_qt", null ],
      [ "如何从目录树中排除所有测试目录?", "faq.html#faq_excl_dir", null ],
      [ "Doxygen会自动在运行的文本中生成一个指向类MyClass的链接。我该如何在某个地方预防呢?", "faq.html#faq_class", null ],
      [ "我最喜欢的编程语言是X.我还能使用doxygen吗?", "faq.html#faq_pgm_X", null ],
      [ "帮助!我得到了一个神秘的消息“输入缓冲区溢出，不能扩大缓冲区，因为扫描仪使用REJECT”", "faq.html#faq_lex", null ],
      [ "在latex目录中运行make时，我得到“TeX容量超出”。现在怎么办呢?", "faq.html#faq_latex", null ],
      [ "为什么通过STL类的依赖关系没有显示在点图中?", "faq.html#faq_stl", null ],
      [ "我有问题，使搜索引擎与PHP5和/或windows工作", "faq.html#faq_search", null ],
      [ "我可以从命令行配置doxygen吗?", "faq.html#faq_cmdline", null ],
      [ "doxygen这个名字是怎么来的?", "faq.html#faq_name", null ],
      [ "开发doxygen的原因是什么?", "faq.html#faq_why", null ]
    ] ],
    [ "故障排除", "trouble.html", [
      [ "已知问题", "trouble.html#knowproblems", null ],
      [ "如何获取帮助", "trouble.html#howtohelp", null ],
      [ "如何报告bug", "trouble.html#bug_reports", null ]
    ] ],
    [ "特性", "features.html", null ],
    [ "Doxygen用法", "doxygen_usage.html", [
      [ "微调的输出", "doxygen_usage.html#doxygen_finetune", null ]
    ] ],
    [ "Doxywizard用法", "doxywizard_usage.html", null ],
    [ "配置", "config.html", [
      [ "格式", "config.html#config_format", null ],
      [ "与项目相关的配置选项", "config.html#config_project", null ],
      [ "构建相关的配置选项", "config.html#config_build", null ],
      [ "与警告和进度消息相关的配置选项", "config.html#config_messages", null ],
      [ "与输入文件相关的配置选项", "config.html#config_input", null ],
      [ "与源浏览相关的配置选项", "config.html#config_source_browser", null ],
      [ "与按字母顺序排列的类索引相关的配置选项", "config.html#config_index", null ],
      [ "与HTML输出相关的配置选项", "config.html#config_html", null ],
      [ "配置选项与LaTeX输出相关", "config.html#config_latex", null ],
      [ "与RTF输出相关的配置选项", "config.html#config_rtf", null ],
      [ "与man page输出相关的配置选项", "config.html#config_man", null ],
      [ "与XML输出相关的配置选项", "config.html#config_xml", null ],
      [ "与DOCBOOK输出相关的配置选项", "config.html#config_docbook", null ],
      [ "AutoGen定义输出的配置选项", "config.html#config_autogen", null ],
      [ "与Perl模块输出相关的配置选项", "config.html#config_perlmod", null ],
      [ "与预处理器相关的配置选项", "config.html#config_preprocessor", null ],
      [ "与外部引用相关的配置选项", "config.html#config_external", null ],
      [ "与点工具相关的配置选项", "config.html#config_dot", null ],
      [ "例子", "config.html#config_examples", null ]
    ] ],
    [ "特殊的命令", "commands.html", [
      [ "介绍", "commands.html#cmd_intro", null ],
      [ "\\addtogroup <name> [(title)]", "commands.html#cmdaddtogroup", null ],
      [ "\\callgraph", "commands.html#cmdcallgraph", null ],
      [ "\\hidecallgraph", "commands.html#cmdhidecallgraph", null ],
      [ "\\callergraph", "commands.html#cmdcallergraph", null ],
      [ "\\hidecallergraph", "commands.html#cmdhidecallergraph", null ],
      [ "\\showrefby", "commands.html#cmdshowrefby", null ],
      [ "\\hiderefby", "commands.html#cmdhiderefby", null ],
      [ "\\showrefs", "commands.html#cmdshowrefs", null ],
      [ "\\hiderefs", "commands.html#cmdhiderefs", null ],
      [ "\\category <name> [<header-file>] [<header-name>]", "commands.html#cmdcategory", null ],
      [ "\\class <name> [<header-file>] [<header-name>]", "commands.html#cmdclass", null ],
      [ "\\def <name>", "commands.html#cmddef", null ],
      [ "\\defgroup <name> (group title)", "commands.html#cmddefgroup", null ],
      [ "\\dir [<path fragment>]", "commands.html#cmddir", null ],
      [ "\\enum <name>", "commands.html#cmdenum", null ],
      [ "\\example['{lineno}'] <file-name>", "commands.html#cmdexample", null ],
      [ "\\endinternal", "commands.html#cmdendinternal", null ],
      [ "\\extends <name>", "commands.html#cmdextends", null ],
      [ "\\file [<name>]", "commands.html#cmdfile", null ],
      [ "\\fn (function declaration)", "commands.html#cmdfn", null ],
      [ "\\headerfile <header-file> [<header-name>]", "commands.html#cmdheaderfile", null ],
      [ "\\hideinitializer", "commands.html#cmdhideinitializer", null ],
      [ "\\idlexcept <name>", "commands.html#cmdidlexcept", null ],
      [ "\\implements <name>", "commands.html#cmdimplements", null ],
      [ "\\ingroup (<groupname> [<groupname> <groupname>])", "commands.html#cmdingroup", null ],
      [ "\\interface <name> [<header-file>] [<header-name>]", "commands.html#cmdinterface", null ],
      [ "\\internal", "commands.html#cmdinternal", null ],
      [ "\\mainpage [(title)]", "commands.html#cmdmainpage", null ],
      [ "\\memberof <name>", "commands.html#cmdmemberof", null ],
      [ "\\name [(header)]", "commands.html#cmdname", null ],
      [ "\\namespace <name>", "commands.html#cmdnamespace", null ],
      [ "\\nosubgrouping", "commands.html#cmdnosubgrouping", null ],
      [ "\\overload [(function declaration)]", "commands.html#cmdoverload", null ],
      [ "\\package <name>", "commands.html#cmdpackage", null ],
      [ "\\page <name> (title)", "commands.html#cmdpage", null ],
      [ "\\private", "commands.html#cmdprivate", null ],
      [ "\\privatesection", "commands.html#cmdprivatesection", null ],
      [ "\\property (qualified property name)", "commands.html#cmdproperty", null ],
      [ "\\protected", "commands.html#cmdprotected", null ],
      [ "\\protectedsection", "commands.html#cmdprotectedsection", null ],
      [ "\\protocol <name> [<header-file>] [<header-name>]", "commands.html#cmdprotocol", null ],
      [ "\\public", "commands.html#cmdpublic", null ],
      [ "\\publicsection", "commands.html#cmdpublicsection", null ],
      [ "\\pure", "commands.html#cmdpure", null ],
      [ "\\relates <name>", "commands.html#cmdrelates", null ],
      [ "\\related <name>", "commands.html#cmdrelated", null ],
      [ "\\relatesalso <name>", "commands.html#cmdrelatesalso", null ],
      [ "\\relatedalso <name>", "commands.html#cmdrelatedalso", null ],
      [ "\\showinitializer", "commands.html#cmdshowinitializer", null ],
      [ "\\static", "commands.html#cmdstatic", null ],
      [ "\\struct <name> [<header-file>] [<header-name>]", "commands.html#cmdstruct", null ],
      [ "\\typedef (typedef declaration)", "commands.html#cmdtypedef", null ],
      [ "\\union <name> [<header-file>] [<header-name>]", "commands.html#cmdunion", null ],
      [ "\\var (variable declaration)", "commands.html#cmdvar", null ],
      [ "\\vhdlflow [(title for the flow chart)]", "commands.html#cmdvhdlflow", null ],
      [ "\\weakgroup <name> [(title)]", "commands.html#cmdweakgroup", null ],
      [ "\\attention { attention text }", "commands.html#cmdattention", null ],
      [ "\\author { list of authors }", "commands.html#cmdauthor", null ],
      [ "\\authors { list of authors }", "commands.html#cmdauthors", null ],
      [ "\\brief { brief description }", "commands.html#cmdbrief", null ],
      [ "\\bug { bug description }", "commands.html#cmdbug", null ],
      [ "\\cond [(section-label)]", "commands.html#cmdcond", null ],
      [ "\\copyright { copyright description }", "commands.html#cmdcopyright", null ],
      [ "\\date { date description }", "commands.html#cmddate", null ],
      [ "\\deprecated { description }", "commands.html#cmddeprecated", null ],
      [ "\\details { detailed description }", "commands.html#cmddetails", null ],
      [ "\\else", "commands.html#cmdelse", null ],
      [ "\\elseif (section-label)", "commands.html#cmdelseif", null ],
      [ "\\endcond", "commands.html#cmdendcond", null ],
      [ "\\endif", "commands.html#cmdendif", null ],
      [ "\\exception <exception-object> { exception description }", "commands.html#cmdexception", null ],
      [ "\\if (section-label)", "commands.html#cmdif", null ],
      [ "\\ifnot (section-label)", "commands.html#cmdifnot", null ],
      [ "\\invariant { description of invariant }", "commands.html#cmdinvariant", null ],
      [ "\\note { text }", "commands.html#cmdnote", null ],
      [ "\\par [(paragraph title)] { paragraph }", "commands.html#cmdpar", null ],
      [ "\\param '['dir']' <parameter-name> { parameter description }", "commands.html#cmdparam", null ],
      [ "\\parblock", "commands.html#cmdparblock", null ],
      [ "\\endparblock", "commands.html#cmdendparblock", null ],
      [ "\\tparam <template-parameter-name> { description }", "commands.html#cmdtparam", null ],
      [ "\\post { description of the postcondition }", "commands.html#cmdpost", null ],
      [ "\\pre { description of the precondition }", "commands.html#cmdpre", null ],
      [ "\\remark { remark text }", "commands.html#cmdremark", null ],
      [ "\\remarks { remark text }", "commands.html#cmdremarks", null ],
      [ "\\result { description of the result value }", "commands.html#cmdresult", null ],
      [ "\\return { description of the return value }", "commands.html#cmdreturn", null ],
      [ "\\returns { description of the return value }", "commands.html#cmdreturns", null ],
      [ "\\retval <return value> { description }", "commands.html#cmdretval", null ],
      [ "\\sa { references }", "commands.html#cmdsa", null ],
      [ "\\see { references }", "commands.html#cmdsee", null ],
      [ "\\short { short description }", "commands.html#cmdshort", null ],
      [ "\\since { text }", "commands.html#cmdsince", null ],
      [ "\\test { paragraph describing a test case }", "commands.html#cmdtest", null ],
      [ "\\throw <exception-object> { exception description }", "commands.html#cmdthrow", null ],
      [ "\\throws <exception-object> { exception description }", "commands.html#cmdthrows", null ],
      [ "\\todo { paragraph describing what is to be done }", "commands.html#cmdtodo", null ],
      [ "\\version { version number }", "commands.html#cmdversion", null ],
      [ "\\warning { warning message }", "commands.html#cmdwarning", null ],
      [ "\\xrefitem <key> \"(heading)\" \"(list title)\" { text }", "commands.html#cmdxrefitem", null ],
      [ "\\addindex (text)", "commands.html#cmdaddindex", null ],
      [ "\\anchor <word>", "commands.html#cmdanchor", null ],
      [ "\\cite <label>", "commands.html#cmdcite", null ],
      [ "\\endlink", "commands.html#cmdendlink", null ],
      [ "\\link <link-object>", "commands.html#cmdlink", null ],
      [ "\\ref <name> [\"(text)\"]", "commands.html#cmdref", null ],
      [ "\\refitem <name>", "commands.html#cmdrefitem", null ],
      [ "\\secreflist", "commands.html#cmdsecreflist", null ],
      [ "\\endsecreflist", "commands.html#cmdendsecreflist", null ],
      [ "\\subpage <name> [\"(text)\"]", "commands.html#cmdsubpage", null ],
      [ "\\tableofcontents['{'[option[:level]][,option[:level]]*'}']", "commands.html#cmdtableofcontents", null ],
      [ "\\section <section-name> (section title)", "commands.html#cmdsection", null ],
      [ "\\subsection <subsection-name> (subsection title)", "commands.html#cmdsubsection", null ],
      [ "\\subsubsection <subsubsection-name> (subsubsection title)", "commands.html#cmdsubsubsection", null ],
      [ "\\paragraph <paragraph-name> (paragraph title)", "commands.html#cmdparagraph", null ],
      [ "\\dontinclude['{lineno}'] <file-name>", "commands.html#cmddontinclude", null ],
      [ "\\include['{'option'}'] <file-name>", "commands.html#cmdinclude", null ],
      [ "\\includelineno <file-name>", "commands.html#cmdincludelineno", null ],
      [ "\\includedoc <file-name>", "commands.html#cmdincludedoc", null ],
      [ "\\line ( pattern )", "commands.html#cmdline", null ],
      [ "\\skip ( pattern )", "commands.html#cmdskip", null ],
      [ "\\skipline ( pattern )", "commands.html#cmdskipline", null ],
      [ "\\snippet['{'option'}'] <file-name> ( block_id )", "commands.html#cmdsnippet", null ],
      [ "\\snippetlineno <file-name> ( block_id )", "commands.html#cmdsnippetlineno", null ],
      [ "\\snippetdoc <file-name> ( block_id )", "commands.html#cmdsnippetdoc", null ],
      [ "\\until ( pattern )", "commands.html#cmduntil", null ],
      [ "\\verbinclude <file-name>", "commands.html#cmdverbinclude", null ],
      [ "\\htmlinclude [\"[block]\"] <file-name>", "commands.html#cmdhtmlinclude", null ],
      [ "\\latexinclude <file-name>", "commands.html#cmdlatexinclude", null ],
      [ "\\a <word>", "commands.html#cmda", null ],
      [ "\\arg { item-description }", "commands.html#cmdarg", null ],
      [ "\\b <word>", "commands.html#cmdb", null ],
      [ "\\c <word>", "commands.html#cmdc", null ],
      [ "\\code['{'<word>'}']", "commands.html#cmdcode", null ],
      [ "\\copydoc <link-object>", "commands.html#cmdcopydoc", null ],
      [ "\\copybrief <link-object>", "commands.html#cmdcopybrief", null ],
      [ "\\copydetails <link-object>", "commands.html#cmdcopydetails", null ],
      [ "\\docbookonly", "commands.html#cmddocbookonly", null ],
      [ "\\dot [\"caption\"] [<sizeindication>=<size>]", "commands.html#cmddot", null ],
      [ "\\emoji \"name\"", "commands.html#cmdemoji", null ],
      [ "\\msc [\"caption\"] [<sizeindication>=<size>]", "commands.html#cmdmsc", null ],
      [ "\\startuml [{file}] [\"caption\"] [<sizeindication>=<size>]", "commands.html#cmdstartuml", null ],
      [ "\\dotfile <file> [\"caption\"] [<sizeindication>=<size>]", "commands.html#cmddotfile", null ],
      [ "\\mscfile <file> [\"caption\"] [<sizeindication>=<size>]", "commands.html#cmdmscfile", null ],
      [ "\\diafile <file> [\"caption\"] [<sizeindication>=<size>]", "commands.html#cmddiafile", null ],
      [ "\\e <word>", "commands.html#cmde", null ],
      [ "\\em <word>", "commands.html#cmdem", null ],
      [ "\\endcode", "commands.html#cmdendcode", null ],
      [ "\\enddocbookonly", "commands.html#cmdenddocbookonly", null ],
      [ "\\enddot", "commands.html#cmdenddot", null ],
      [ "\\endmsc", "commands.html#cmdendmsc", null ],
      [ "\\enduml", "commands.html#cmdenduml", null ],
      [ "\\endhtmlonly", "commands.html#cmdendhtmlonly", null ],
      [ "\\endlatexonly", "commands.html#cmdendlatexonly", null ],
      [ "\\endmanonly", "commands.html#cmdendmanonly", null ],
      [ "\\endrtfonly", "commands.html#cmdendrtfonly", null ],
      [ "\\endverbatim", "commands.html#cmdendverbatim", null ],
      [ "\\endxmlonly", "commands.html#cmdendxmlonly", null ],
      [ "\\f$", "commands.html#cmdfdollar", null ],
      [ "\\f[", "commands.html#cmdfbropen", null ],
      [ "\\f]", "commands.html#cmdfbrclose", null ],
      [ "\\f{environment}{", "commands.html#cmdfcurlyopen", null ],
      [ "\\f}", "commands.html#cmdfcurlyclose", null ],
      [ "\\htmlonly [\"[block]\"]", "commands.html#cmdhtmlonly", null ],
      [ "\\image['{'option'}'] <format> <file> [\"caption\"] [<sizeindication>=<size>]", "commands.html#cmdimage", null ],
      [ "\\latexonly", "commands.html#cmdlatexonly", null ],
      [ "\\manonly", "commands.html#cmdmanonly", null ],
      [ "\\li { item-description }", "commands.html#cmdli", null ],
      [ "\\n", "commands.html#cmdn", null ],
      [ "\\p <word>", "commands.html#cmdp", null ],
      [ "\\rtfonly", "commands.html#cmdrtfonly", null ],
      [ "\\verbatim", "commands.html#cmdverbatim", null ],
      [ "\\xmlonly", "commands.html#cmdxmlonly", null ],
      [ "\\\\", "commands.html#cmdbackslash", null ],
      [ "\\@", "commands.html#cmdat", null ],
      [ "\\~[LanguageId]", "commands.html#cmdtilde", null ],
      [ "\\&", "commands.html#cmdamp", null ],
      [ "\\$", "commands.html#cmddollar", null ],
      [ "\\#", "commands.html#cmdhash", null ],
      [ "\\<", "commands.html#cmdlt", null ],
      [ "\\>", "commands.html#cmdgt", null ],
      [ "\\%", "commands.html#cmdperc", null ],
      [ "\\\"", "commands.html#cmdquot", null ],
      [ "\\.", "commands.html#cmdchardot", null ],
      [ "\\=", "commands.html#cmdeq", null ],
      [ "\\::", "commands.html#cmddcolon", null ],
      [ "\\|", "commands.html#cmdpipe", null ],
      [ "\\--", "commands.html#cmdndash", null ],
      [ "\\---", "commands.html#cmdmdash", null ]
    ] ],
    [ "HTML命令", "htmlcmds.html", null ],
    [ "XML命令", "xmlcmds.html", null ],
    [ "表情支持", "emojisup.html", [
      [ "表示", "emojisup.html#emojirep", null ],
      [ "表情图像检索", "emojisup.html#emojiimage", null ]
    ] ],
    [ "国际化", "langhowto.html", null ],
    [ "Perl模块的输出", "perlmod.html", [
      [ "用法", "perlmod.html#using_perlmod_fmt", null ],
      [ "使用LaTeX生成器。", "perlmod.html#perlmod_latex", [
        [ "创建PDF和DVI输出", "perlmod.html#pm_pdf_gen", null ]
      ] ],
      [ "文档格式。", "perlmod.html#doxydocs_format", null ],
      [ "数据结构", "perlmod.html#doxymodel_format", null ]
    ] ],
    [ "Perl模块树节点", "perlmod_tree.html", null ],
    [ "Doxygen的内部", "arch.html", null ],
    [ "更改日志", "changelog.html", [
      [ "1.8 Series", "changelog.html#log_1_8", [
        [ "Release 1.8.16", "changelog.html#log_1_8_16", null ],
        [ "Release 1.8.15", "changelog.html#log_1_8_15", null ],
        [ "Release 1.8.14", "changelog.html#log_1_8_14", null ],
        [ "Release 1.8.13", "changelog.html#log_1_8_13", null ],
        [ "Release 1.8.12", "changelog.html#log_1_8_12", null ],
        [ "Release 1.8.11", "changelog.html#log_1_8_11", null ],
        [ "Release 1.8.10", "changelog.html#log_1_8_10", null ],
        [ "Release 1.8.9.1", "changelog.html#log_1_8_9_1", null ],
        [ "Release 1.8.9", "changelog.html#log_1_8_9", null ],
        [ "Release 1.8.8", "changelog.html#log_1_8_8", null ],
        [ "Release 1.8.7", "changelog.html#log_1_8_7", null ],
        [ "Release 1.8.6", "changelog.html#log_1_8_6", null ],
        [ "Release 1.8.5", "changelog.html#log_1_8_5", null ],
        [ "Release 1.8.4", "changelog.html#log_1_8_4", null ],
        [ "Release 1.8.3.1", "changelog.html#log_1_8_3_1", null ],
        [ "Release 1.8.3", "changelog.html#log_1_8_3", null ],
        [ "Release 1.8.2", "changelog.html#log_1_8_2", null ],
        [ "Release 1.8.1.2", "changelog.html#log_1_8_1_2", null ],
        [ "Release 1.8.1.1", "changelog.html#log_1_8_1_1", null ],
        [ "Release 1.8.1", "changelog.html#log_1_8_1", null ],
        [ "Release 1.8.0", "changelog.html#log_1_8_0", null ]
      ] ],
      [ "1.7 Series", "changelog.html#log_1_7", null ],
      [ "1.6 Series", "changelog.html#log_1_6", null ],
      [ "1.5 Series", "changelog.html#log_1_5", null ],
      [ "1.4 Series", "changelog.html#log_1_4", null ],
      [ "1.3 Series", "changelog.html#log_1_3", null ],
      [ "1.2 Series", "changelog.html#log_1_2", null ],
      [ "1.1 Series", "changelog.html#log_1_1", null ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"arch.html",
"custcmd.html#custcmd_nesting"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';